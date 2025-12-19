#!/usr/bin/env python3
"""
Update all blog posts with:
1. Author: England Hart
2. Featured images
3. Proper SEO alt text
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
    
    # Check if already has author
    if "England Hart" in content:
        print(f"  - Author already present in {filename}")
    else:
        # Add author after the date line
        # Look for pattern like: <p className="text-gray-500">December
        date_pattern = r'(<p className="text-gray-500">)(December \d+, \d+)'
        if re.search(date_pattern, content):
            content = re.sub(
                date_pattern,
                r'\1By ' + AUTHOR + r' • \2',
                content
            )
            print(f"  + Added author to {filename}")
        else:
            print(f"  ! Could not find date pattern in {filename}")
    
    # Check if already has featured image
    if 'className="w-full h-64' in content or 'className="w-full h-96' in content:
        print(f"  - Featured image structure may already exist in {filename}")
    
    # Add featured image after the title/date section
    # Look for the closing of the header section before main content
    if image_info and image_info['image'] not in content:
        # Find the pattern after the date/author line and before the main content
        # Pattern: </p>\n          </div>\n        </div>\n\n        {/* Main Content */}
        header_end_pattern = r'(</p>\s*</div>\s*</div>\s*\n\s*{\s*/\*\s*Main Content\s*\*/\s*})'
        
        image_jsx = f'''</p>
          </div>
          
          {{/* Featured Image */}}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="{image_info['image']}" 
              alt="{image_info['alt']}"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>

        {{/* Main Content */}}'''
        
        if re.search(header_end_pattern, content):
            content = re.sub(header_end_pattern, image_jsx, content)
            print(f"  + Added featured image to {filename}")
        else:
            # Try alternative pattern - simpler approach
            # Look for {/* Main Content */} and add image before it
            main_content_pattern = r'(</div>\s*</div>\s*\n\s*)({\s*/\*\s*Main Content\s*\*/\s*})'
            if re.search(main_content_pattern, content):
                image_section = f'''</div>
          
          {{/* Featured Image */}}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="{image_info['image']}" 
              alt="{image_info['alt']}"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>

        '''
                content = re.sub(main_content_pattern, image_section + r'\2', content)
                print(f"  + Added featured image (alt pattern) to {filename}")
            else:
                print(f"  ! Could not find insertion point for image in {filename}")
    else:
        print(f"  - Image may already be present in {filename}")
    
    with open(filepath, 'w') as f:
        f.write(content)

def main():
    print("Updating blog posts with author and featured images...")
    print(f"Author: {AUTHOR}")
    print("-" * 50)
    
    for filename, image_info in BLOG_IMAGE_MAP.items():
        filepath = os.path.join(BLOG_DIR, filename)
        if os.path.exists(filepath):
            print(f"\nProcessing: {filename}")
            update_blog_post(filepath, image_info)
        else:
            print(f"\n! File not found: {filename}")
    
    print("\n" + "-" * 50)
    print("Done!")

if __name__ == "__main__":
    main()
