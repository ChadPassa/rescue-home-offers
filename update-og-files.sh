#!/bin/bash

# Script to update all static OG files to redirect to /app/blog/ instead of using ?app=1

BLOG_DIR="/home/ubuntu/rescue-home-offers/client/public/blog"

for dir in "$BLOG_DIR"/*/; do
  slug=$(basename "$dir")
  file="$dir/index.html"
  
  if [ -f "$file" ]; then
    echo "Updating: $slug"
    
    # Replace the redirect URL from ?app=1 to /app/blog/
    sed -i "s|/blog/${slug}?app=1|/app/blog/${slug}|g" "$file"
  fi
done

echo "Done! All static OG files updated."
