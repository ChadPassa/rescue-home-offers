#!/usr/bin/env python3
"""
Generate blog post TSX files for Rescue Home Offers - Cluster 2
Market Conditions and Stale Listings
"""

import json
import os
import re

# Read the generated blog posts
with open('/home/ubuntu/rescue_home_offers_blog_cluster_2.json', 'r') as f:
    data = json.load(f)

# Blog post template
def create_blog_tsx(title, slug, category, excerpt, content, related_posts):
    # Escape content for JSX
    content_escaped = content.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    excerpt_escaped = excerpt.replace('"', '\\"')
    title_escaped = title.replace('"', '\\"')
    
    # Create related posts JSX
    related_jsx = ""
    for post in related_posts:
        related_jsx += f'''
          <Link to="/blog/{post['slug']}" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900 hover:text-primary">{post['title']}</h4>
          </Link>'''
    
    tsx_content = f'''import {{ Link }} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReactMarkdown from "react-markdown";

const blogContent = `{content_escaped}`;

export default function BlogPost() {{
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Link to="/blog" className="text-primary hover:underline">&larr; Back to Blog</Link>
          </div>
          
          <header className="mb-8">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title_escaped}</h1>
            <p className="text-xl text-gray-600">{excerpt_escaped}</p>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{{blogContent}}</ReactMarkdown>
          </div>
          
          <div className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Second Opinion?</h3>
            <p className="text-gray-600 mb-6">
              Don't let your home become another stale listing statistic. We'll show you ALL your options - 
              from cash offers to creative financing solutions. No pressure, no BS.
            </p>
            <a 
              href="/#calculator" 
              className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Your Free Offer
            </a>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-4">{related_jsx}
            </div>
          </div>
        </article>
      </main>
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

# Generate the blog listing entries
print("\n--- Blog Listing Entries for Blog.tsx ---\n")
for post in posts:
    print(f'''  {{
    id: "{post['slug']}",
    title: "{post['title']}",
    excerpt: "{post['excerpt'][:150]}...",
    category: "{post['category']}",
    date: "December 18, 2025",
    slug: "{post['slug']}",
    featured: {"true" if "2025" in post['title'] else "false"}
  }},''')

# Generate the route entries
print("\n--- Route Entries for App.tsx ---\n")
for post in posts:
    component_name = ''.join(word.capitalize() for word in post['slug'].replace('-', ' ').split())
    print(f'import {component_name} from "./pages/blog/{post["slug"]}";')

print("\n")
for post in posts:
    component_name = ''.join(word.capitalize() for word in post['slug'].replace('-', ' ').split())
    print(f'<Route path="/blog/{post["slug"]}" element={{<{component_name} />}} />')

print("\nDone!")
