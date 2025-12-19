import json
import os
import re

# Load the blog link mapping
with open("blog_link_mapping.json", "r") as f:
    link_mapping = json.load(f)

# Load the original blog content
with open("rescue_home_offers_blog_cluster_1.json", "r") as f:
    cluster1_content = json.load(f)

with open("rescue_home_offers_blog_cluster_2.json", "r") as f:
    cluster2_content = json.load(f)

all_posts_content = [item["output"] for item in cluster1_content["results"]] + [item["output"] for item in cluster2_content["results"]]

# Load the template
with open("blog_template.tsx", "r") as f:
    template = f.read()

# Function to find and replace keywords with links
def add_contextual_links(content, current_slug):
    for post in link_mapping["posts"]:
        if post["slug"] != current_slug:
            for keyword in post["keywords"]:
                # Use a case-insensitive replacement
                # Ensure we don't link within an existing link
                pattern = re.compile(r"(?<!href=\")(?<!>)\\b" + re.escape(keyword) + r"\\b(?!</a>)", re.IGNORECASE)
                replacement = f'<Link to="{post["url"]}">{keyword}</Link>'
                content = pattern.sub(replacement, content)
    return content

# Function to convert markdown-like content to JSX
def markdown_to_jsx(content):
    # Replace bold
    content = content.replace("**", "<strong>")
    # Replace bullet points
    content = content.replace("\n- ", "\n<li>")
    # Wrap paragraphs
    paragraphs = content.split("\n\n")
    jsx_paragraphs = [f"<p>{p.strip()}</p>" for p in paragraphs if p.strip()]
    return "\n\n".join(jsx_paragraphs)

# Process each blog post
for post_content in all_posts_content:
    slug = post_content["slug"]
    title = post_content["title"]
    content = post_content["content"]
    category = post_content["category"]

    # Add contextual links
    linked_content = add_contextual_links(content, slug)

    # Convert to JSX
    jsx_content = markdown_to_jsx(linked_content)

    # Find the corresponding post in the link mapping to get the URL
    post_info = next((p for p in link_mapping["posts"] if p["slug"] == slug), None)
    if not post_info:
        continue

    # Create the related articles list
    related_articles = "".join([f"<li><Link to=\"{p['url']}\" className=\"text-[#c9a961] hover:underline\">{p['title']}</Link></li>" for p in link_mapping["posts"] if p["slug"] != slug])

    # Create the TSX file content
    tsx_content = template.format(
        function_name=post_info["slug"].replace("-", " ").title().replace(" ", ""),
        category=category,
        title=title,
        slug=slug,
        content=jsx_content,
        related_articles=related_articles
    )

    # Write the new TSX file
    file_path = f"client/src/pages/blog/{slug}.tsx"
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    with open(file_path, "w") as f:
        f.write(tsx_content)

print("All blog posts have been rewritten with contextual links.")
