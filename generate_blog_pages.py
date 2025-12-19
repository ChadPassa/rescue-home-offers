import json
import os
import re

# Read the generated blog posts
with open("/home/ubuntu/rescue_home_offers_blog_cluster_1.json", "r") as f:
    blog_posts = json.load(f)["results"]

# Create the blog directory if it doesn't exist
blog_dir = "/home/ubuntu/rescue-home-offers/client/src/pages/blog"
if not os.path.exists(blog_dir):
    os.makedirs(blog_dir)

# Template for blog post pages
def create_blog_page(title, content, category, slug, date, related_links):
    # Convert markdown content to JSX
    # Replace ## headers with h2 tags
    content = re.sub(r'^## (.+)$', r'<h2>\1</h2>', content, flags=re.MULTILINE)
    # Replace # headers with h1 tags (skip if already in title)
    content = re.sub(r'^# .+$', '', content, flags=re.MULTILINE)
    # Replace **bold** with strong tags
    content = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', content)
    # Replace *italic* with em tags
    content = re.sub(r'\*(.+?)\*', r'<em>\1</em>', content)
    # Replace bullet points
    content = re.sub(r'^\*   (.+)$', r'<li>\1</li>', content, flags=re.MULTILINE)
    # Wrap consecutive li tags in ul
    content = re.sub(r'((?:<li>.+</li>\n?)+)', r'<ul>\n\1</ul>\n', content)
    # Replace paragraphs (double newlines)
    paragraphs = content.split('\n\n')
    formatted_paragraphs = []
    for p in paragraphs:
        p = p.strip()
        if p and not p.startswith('<h') and not p.startswith('<ul'):
            formatted_paragraphs.append(f'<p>{p}</p>')
        elif p:
            formatted_paragraphs.append(p)
    content = '\n\n'.join(formatted_paragraphs)
    
    # Escape backticks and curly braces for JSX
    content = content.replace('`', '\\`').replace('{', '{{').replace('}', '}}')
    
    # Create component name from slug
    component_name = ''.join(word.capitalize() for word in slug.replace('-', ' ').split())
    
    # Generate related links JSX
    related_links_jsx = '\n'.join([
        f'              <li><Link to="/blog/{link["slug"]}" className="text-[#c9a961] hover:underline">{link["title"]}</Link></li>'
        for link in related_links
    ])
    
    return f'''import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {{ Link }} from 'wouter';

export default function {component_name}() {{
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {{/* Hero Section */}}
      <section className="bg-gradient-to-b from-gray-50 to-white border-b py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-4">
            <Link to="/blog" className="text-[#c9a961] hover:underline">← Back to Blog</Link>
          </div>
          <span className="text-xs font-semibold text-[#c9a961] bg-[#c9a961]/10 px-3 py-1 rounded-full">{category}</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4">{title}</h1>
          <p className="text-gray-500 mt-4">{date}</p>
        </div>
      </section>

      {{/* Content Section */}}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg prose-gray" dangerouslySetInnerHTML={{{{ __html: `{content}` }}}} />
        
        {{/* Related Articles */}}
        <div className="container mx-auto px-4 max-w-3xl mt-12">
          <div className="p-6 bg-gray-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
            <ul className="space-y-3">
{related_links_jsx}
            </ul>
          </div>
        </div>
      </article>

      {{/* CTA Section */}}
      <section className="bg-gray-50 py-12 border-t">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for Your Second Opinion?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Get a free, no-obligation cash offer or schedule a consultation to explore all your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#calculator" className="bg-[#c9a961] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b8860b] transition-colors inline-block">
              Get Instant Offer
            </a>
            <a href="/#contact" className="bg-white text-gray-900 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-[#c9a961] transition-colors">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}}
'''

# Get all slugs for related links
all_posts = []
for post in blog_posts:
    output = post.get("output")
    if output:
        all_posts.append({
            "slug": output["slug"],
            "title": output["title"]
        })

# Skip the first post (pillar) as it's already been manually created
for i, post in enumerate(blog_posts[1:], start=1):
    output = post.get("output")
    if not output:
        continue
    
    slug = output["slug"]
    title = output["title"]
    content = output["content"]
    category = output["category"]
    date = "December 18, 2025"
    
    # Get related links (all other posts except this one)
    related_links = [p for p in all_posts if p["slug"] != slug]
    
    # Create the blog page
    page_content = create_blog_page(title, content, category, slug, date, related_links)
    
    # Write the file
    file_path = f"{blog_dir}/{slug}.tsx"
    with open(file_path, "w") as f:
        f.write(page_content)
    
    print(f"Created: {file_path}")

print("Done!")
