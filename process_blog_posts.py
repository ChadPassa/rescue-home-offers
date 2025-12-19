
import json
import os

# Read the generated blog posts
with open("/home/ubuntu/rescue_home_offers_blog_cluster_1.json", "r") as f:
    blog_posts = json.load(f)["results"]

# Create the blog directory if it doesn't exist
blog_dir = "/home/ubuntu/rescue-home-offers/client/src/pages/blog"
if not os.path.exists(blog_dir):
    os.makedirs(blog_dir)

# Create a new file for each blog post
for post in blog_posts:
    output = post["output"]
    if not output:
        continue

    slug = output["slug"]
    title = output["title"]
    content = output["content"]
    component_name = slug.replace('-', ' ').title().replace(' ', '')

    # Escape backticks and curly braces in the content
    escaped_content = content.replace('`', '\\`').replace('{', '{{').replace('}', '}}')

    # Create the TSX file content
    tsx_content = f"""
import React from 'react';

const {component_name} = () => {{
    return (
        <div className=\"blog-post\">
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{{{ __html: `{escaped_content}` }}}} />
        </div>
    );
}};

export default {component_name};
"""

    # Write the TSX file
    with open(f"{blog_dir}/{slug}.tsx", "w") as f:
        f.write(tsx_content)

    print(f"Created page for {slug}")

# Update the App.tsx file to add the new routes and imports
with open("/home/ubuntu/rescue-home-offers/client/src/App.tsx", "r+") as f:
    content = f.read()
    f.seek(0)
    new_imports = ""
    new_routes = ""
    for post in blog_posts:
        output = post["output"]
        if not output:
            continue
        slug = output["slug"]
        component_name = slug.replace('-', ' ').title().replace(' ', '')
        new_imports += f"import {component_name} from './pages/blog/{slug}';\n"
        new_routes += f"<Route path=\"/blog/{slug}\" element={{<{component_name} />}} />\n"

    # Add imports at the top of the file
    content = new_imports + content

    # Find the position to insert the new routes
    content = content.replace("<Route path=\"/blog\" element={{<Blog />}} />", f"<Route path=\"/blog\" element={{<Blog />}} />\n{new_routes}")
    f.write(content)

print("Updated App.tsx with new routes and imports")

# Create the SQL script to insert the blog posts into the database
sql_script = ""
for post in blog_posts:
    output = post["output"]
    if not output:
        continue

    title = output["title"].replace("\\\\'", "\\\\'\\\'")
    content = output["content"].replace("\\\\'", "\\\\'\\\'")
    meta_description = output["meta_description"].replace("\\\\'", "\\\\'\\\'")
    slug = output["slug"].replace("\\\\'", "\\\\'\\\'")
    category = output["category"].replace("\\\\'", "\\\\'\\\'")

    sql_script += f"INSERT INTO blogs (title, content, meta_description, slug, category) VALUES ('{title}', '{content}', '{meta_description}', '{slug}', '{category}');\n"

with open("/home/ubuntu/rescue-home-offers/insert_blog_posts.sql", "w") as f:
    f.write(sql_script)

print("Created insert_blog_posts.sql script")
