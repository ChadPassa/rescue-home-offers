#!/usr/bin/env python3
"""
Update all blog posts with:
1. Author: England Hart
2. Featured images
"""

import os
import re

# Blog post to image mapping
BLOG_IMAGE_MAP = {
    "sell-house-fast-las-vegas-the-ultimate-guide-to-all-your-options.tsx": {
        "image": "/images/blog/sell-house-fast-las-vegas.jpg",
        "alt": "Beautiful Las Vegas home with SOLD sign - Sell House Fast Las Vegas"
    },
    "how-to-stop-foreclosure-in-las-vegas-a-step-by-step-guide.tsx": {
        "image": "/images/blog/stop-foreclosure-las-vegas.jpg",
        "alt": "Homeowner holding keys with hope - Stop Foreclosure Las Vegas"
    },
    "cash-home-buyers-in-las-vegas-are-they-legit.tsx": {
        "image": "/images/blog/cash-home-buyers-las-vegas.jpg",
        "alt": "Professional handshake with cash and keys - Cash Home Buyers Las Vegas"
    },
    "selling-an-inherited-property-in-las-vegas-the-complete-guide.tsx": {
        "image": "/images/blog/inherited-property-las-vegas.jpg",
        "alt": "Charming inherited home for sale in Las Vegas desert"
    },
    "creative-real-estate-solutions-beyond-the-cash-offer.tsx": {
        "image": "/images/blog/creative-real-estate-solutions.jpg",
        "alt": "Multiple doors representing creative real estate options"
    },
    "why-70-percent-of-homes-are-sitting-unsold-the-stale-listing-crisis.tsx": {
        "image": "/images/blog/stale-listing-crisis.jpg",
        "alt": "Aerial view of Las Vegas neighborhood with multiple FOR SALE signs"
    },
    "las-vegas-housing-market-2025-what-every-seller-needs-to-know-right-now.tsx": {
        "image": "/images/blog/las-vegas-housing-market-2025.jpg",
        "alt": "Las Vegas skyline with residential neighborhoods at sunset"
    },
    "hidden-costs-stale-listing.tsx": {
        "image": "/images/blog/hidden-costs-stale-listing.jpg",
        "alt": "Calendar with money flying away - hidden costs of stale listing"
    },
    "is-your-home-overpriced-how-to-know-when-to-adjust.tsx": {
        "image": "/images/blog/home-overpriced.jpg",
        "alt": "Price reduction sign on home - Is your home overpriced"
    },
    "when-your-listing-goes-stale-why-your-home-isnt-selling-and-your-other-options.tsx": {
        "image": "/images/blog/listing-goes-stale.jpg",
        "alt": "Weathered FOR SALE sign with PRICE REDUCED - stale listing"
    }
}

AUTHOR = "England Hart"
BLOG_DIR = "/home/ubuntu/rescue-home-offers/client/src/pages/blog"

def update_blog_post(filepath, image_info):
    """Update a blog post with author and featured image."""
    with open(filepath, 'r') as f:
        content = f.read()
    
    filename = os.path.basename(filepath)
    modified = False
    
    # 1. Add author to the date line
    # Pattern: <p className="text-gray-500 mt-4">December 18, 2025</p>
    date_pattern = r'(<p className="text-gray-500[^"]*">)(December \d+, \d+)(</p>)'
    if "England Hart" not in content:
        if re.search(date_pattern, content):
            content = re.sub(
                date_pattern,
                r'\g<1>By ' + AUTHOR + r' • \2\3',
                content
            )
            print(f"  + Added author to {filename}")
            modified = True
        else:
            print(f"  ! Could not find date pattern in {filename}")
    else:
        print(f"  - Author already present in {filename}")
    
    # 2. Add featured image after the hero section, before Content Section
    if image_info['image'] not in content:
        # Pattern: </section>\n\n      {/* Content Section */}
        section_pattern = r'(</section>)(\s*\n\s*{/\* Content Section \*/})'
        
        image_section = f'''</section>

      {{/* Featured Image */}}
      <div className="container mx-auto px-4 max-w-4xl py-8">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src="{image_info['image']}" 
            alt="{image_info['alt']}"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>

      {{/* Content Section */}}'''
        
        if re.search(section_pattern, content):
            content = re.sub(section_pattern, image_section, content)
            print(f"  + Added featured image to {filename}")
            modified = True
        else:
            print(f"  ! Could not find section pattern in {filename}")
    else:
        print(f"  - Image already present in {filename}")
    
    if modified:
        with open(filepath, 'w') as f:
            f.write(content)
        return True
    return False

def main():
    print("Updating blog posts with author and featured images...")
    print(f"Author: {AUTHOR}")
    print("-" * 50)
    
    updated_count = 0
    for filename, image_info in BLOG_IMAGE_MAP.items():
        filepath = os.path.join(BLOG_DIR, filename)
        if os.path.exists(filepath):
            print(f"\nProcessing: {filename}")
            if update_blog_post(filepath, image_info):
                updated_count += 1
        else:
            print(f"\n! File not found: {filename}")
    
    print("\n" + "-" * 50)
    print(f"Done! Updated {updated_count} files.")

if __name__ == "__main__":
    main()
