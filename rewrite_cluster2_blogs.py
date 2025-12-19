#!/usr/bin/env python3
"""
Rewrite cluster 2 blog posts to match the existing format (no ReactMarkdown)
"""

import json
import os
import re

# Read the generated blog posts
with open('/home/ubuntu/rescue_home_offers_blog_cluster_2.json', 'r') as f:
    data = json.load(f)

def markdown_to_jsx(content):
    """Convert markdown content to JSX elements"""
    lines = content.split('\n')
    jsx_lines = []
    in_list = False
    
    for line in lines:
        line = line.strip()
        if not line:
            if in_list:
                jsx_lines.append('          </ul>')
                in_list = False
            continue
        
        # Headers
        if line.startswith('### '):
            if in_list:
                jsx_lines.append('          </ul>')
                in_list = False
            text = line[4:].replace('"', '\\"')
            jsx_lines.append(f'          <h3>{text}</h3>')
        elif line.startswith('## '):
            if in_list:
                jsx_lines.append('          </ul>')
                in_list = False
            text = line[3:].replace('"', '\\"')
            jsx_lines.append(f'          <h2>{text}</h2>')
        elif line.startswith('# '):
            # Skip h1 as it's in the header
            continue
        # List items
        elif line.startswith('* ') or line.startswith('- '):
            if not in_list:
                jsx_lines.append('          <ul>')
                in_list = True
            text = line[2:]
            # Handle bold text
            text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', text)
            text = text.replace('"', '\\"')
            jsx_lines.append(f'            <li>{text}</li>')
        # Regular paragraphs
        else:
            if in_list:
                jsx_lines.append('          </ul>')
                in_list = False
            text = line
            # Handle bold text
            text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', text)
            # Handle links
            text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2" className="text-[#c9a961] hover:underline">\1</a>', text)
            text = text.replace('"', '\\"')
            jsx_lines.append(f'          <p>{text}</p>')
    
    if in_list:
        jsx_lines.append('          </ul>')
    
    return '\n'.join(jsx_lines)

def create_blog_tsx(title, slug, category, excerpt, content, related_posts):
    """Create a blog post TSX file matching the existing format"""
    
    # Convert markdown to JSX
    jsx_content = markdown_to_jsx(content)
    
    # Escape for JSX
    title_escaped = title.replace("'", "\\'")
    excerpt_escaped = excerpt.replace("'", "\\'")
    
    # Create related posts links
    related_links = []
    for post in related_posts:
        related_links.append(f'              <li><Link to="/blog/{post["slug"]}" className="text-[#c9a961] hover:underline">{post["title"]}</Link></li>')
    related_jsx = '\n'.join(related_links)
    
    tsx_content = f'''import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {{ Link }} from 'wouter';

export default function BlogPost() {{
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4">{title_escaped}</h1>
          <p className="text-gray-500 mt-4">December 18, 2025</p>
        </div>
      </section>

      {{/* Content Section */}}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg prose-gray">
{jsx_content}

          {{/* Related Articles */}}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
            <ul className="space-y-3">
{related_jsx}
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
            <a href="/#calculator" className="bg-[#c9a961] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b8860b] transition-colors inline-block text-lg">
              Get Your Offer Now →
            </a>
            <a href="/#contact" className="bg-white text-gray-900 border-2 border-gray-300 px-6 py-4 rounded-lg font-semibold hover:border-[#c9a961] transition-colors">
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
    return tsx_content

# Process blog posts
posts = []
for result in data['results']:
    output = result['output']
    posts.append({
        'title': output['title'],
        'slug': output['slug'],
        'category': output['category'],
        'excerpt': output['excerpt'],
        'content': output['content']
    })

# Create blog directory if it doesn't exist
blog_dir = '/home/ubuntu/rescue-home-offers/client/src/pages/blog'
os.makedirs(blog_dir, exist_ok=True)

# Generate TSX files for each post
for i, post in enumerate(posts):
    # Get related posts (all other posts in the cluster)
    related = [p for j, p in enumerate(posts) if j != i][:4]
    
    tsx_content = create_blog_tsx(
        post['title'],
        post['slug'],
        post['category'],
        post['excerpt'],
        post['content'],
        related
    )
    
    # Write TSX file
    filename = f"{post['slug']}.tsx"
    filepath = os.path.join(blog_dir, filename)
    with open(filepath, 'w') as f:
        f.write(tsx_content)
    print(f"Created: {filepath}")

print("\nDone!")
