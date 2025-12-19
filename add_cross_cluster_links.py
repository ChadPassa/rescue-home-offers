#!/usr/bin/env python3
"""
Add cross-cluster links to create a true interconnected blog ecosystem.
Every post should link to posts from OTHER clusters, not just its own.
"""

import os
import re

BLOG_DIR = "/home/ubuntu/rescue-home-offers/client/src/pages/blog"

# All blog posts organized by cluster
CLUSTER_1 = {
    "sell-house-fast-las-vegas-the-ultimate-guide-to-all-your-options": "Sell House Fast Las Vegas: The Ultimate Guide",
    "how-to-stop-foreclosure-in-las-vegas-a-step-by-step-guide": "How to Stop Foreclosure in Las Vegas",
    "cash-home-buyers-in-las-vegas-are-they-legit": "Cash Home Buyers in Las Vegas: Are They Legit?",
    "selling-an-inherited-property-in-las-vegas-the-complete-guide": "Selling an Inherited Property in Las Vegas",
    "creative-real-estate-solutions-beyond-the-cash-offer": "Creative Real Estate Solutions: Beyond the Cash Offer",
}

CLUSTER_2 = {
    "why-70-percent-of-homes-are-sitting-unsold-the-stale-listing-crisis": "Why 70% of Homes Are Sitting Unsold",
    "las-vegas-housing-market-2025-what-every-seller-needs-to-know-right-now": "Las Vegas Housing Market 2025",
    "hidden-costs-stale-listing": "The Hidden Costs of a Stale Listing",
    "is-your-home-overpriced-how-to-know-when-to-adjust": "Is Your Home Overpriced?",
    "when-your-listing-goes-stale-why-your-home-isnt-selling-and-your-other-options": "When Your Listing Goes Stale",
}

def get_cross_cluster_links(current_slug, current_cluster):
    """Get links to posts from the OTHER cluster."""
    if current_cluster == 1:
        other_cluster = CLUSTER_2
    else:
        other_cluster = CLUSTER_1
    
    # Return all posts from the other cluster
    links = []
    for slug, title in other_cluster.items():
        links.append((slug, title))
    return links

def update_blog_post(filepath, current_slug):
    """Add cross-cluster links to a blog post's Related Articles section."""
    with open(filepath, 'r') as f:
        content = f.read()
    
    filename = os.path.basename(filepath)
    slug = filename.replace('.tsx', '')
    
    # Determine which cluster this post belongs to
    if slug in CLUSTER_1:
        current_cluster = 1
    elif slug in CLUSTER_2:
        current_cluster = 2
    else:
        print(f"  ! Unknown cluster for {filename}")
        return False
    
    # Get cross-cluster links
    cross_links = get_cross_cluster_links(slug, current_cluster)
    
    # Check if cross-cluster links already exist
    first_cross_slug = cross_links[0][0]
    if first_cross_slug in content:
        print(f"  - Cross-cluster links already present in {filename}")
        return False
    
    # Build the new links JSX
    new_links_jsx = ""
    for link_slug, link_title in cross_links:
        new_links_jsx += f'              <li><Link to="/blog/{link_slug}" className="text-[#c9a961] hover:underline">{link_title}</Link></li>\n'
    
    # Find the Related Articles section and add links before the closing </ul>
    # Pattern: </ul>\n            </div>\n          </div>\n        </article>
    pattern = r'(            </ul>\s*\n\s*</div>\s*\n\s*</div>\s*\n\s*</article>)'
    
    if re.search(pattern, content):
        # Add new links before the </ul>
        replacement = new_links_jsx + r'\1'
        content = re.sub(pattern, replacement, content)
        
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"  + Added {len(cross_links)} cross-cluster links to {filename}")
        return True
    else:
        # Try alternative pattern - look for the ul closing tag in Related Articles
        alt_pattern = r'(</ul>\s*\n\s*</div>\s*\n\s*{/\* CTA Section \*/})'
        if re.search(alt_pattern, content):
            replacement = new_links_jsx.rstrip() + '\n            ' + r'\1'
            content = re.sub(alt_pattern, replacement, content)
            
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"  + Added {len(cross_links)} cross-cluster links to {filename} (alt pattern)")
            return True
        else:
            print(f"  ! Could not find Related Articles section in {filename}")
            return False

def main():
    print("Adding cross-cluster links to create interconnected ecosystem...")
    print("-" * 60)
    
    updated_count = 0
    all_posts = list(CLUSTER_1.keys()) + list(CLUSTER_2.keys())
    
    for slug in all_posts:
        filename = f"{slug}.tsx"
        filepath = os.path.join(BLOG_DIR, filename)
        
        if os.path.exists(filepath):
            print(f"\nProcessing: {filename}")
            if update_blog_post(filepath, slug):
                updated_count += 1
        else:
            print(f"\n! File not found: {filename}")
    
    print("\n" + "-" * 60)
    print(f"Done! Updated {updated_count} files with cross-cluster links.")

if __name__ == "__main__":
    main()
