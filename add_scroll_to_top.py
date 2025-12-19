#!/usr/bin/env python3
"""Add scroll-to-top useEffect to all blog post files."""

import os
import re

BLOG_DIR = "/home/ubuntu/rescue-home-offers/client/src/pages/blog"

# Get all tsx files
blog_files = [f for f in os.listdir(BLOG_DIR) if f.endswith('.tsx')]

for filename in blog_files:
    filepath = os.path.join(BLOG_DIR, filename)
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Skip if already has useEffect
    if 'useEffect' in content:
        print(f"Skipping {filename} - already has useEffect")
        continue
    
    # Add useEffect import
    if "import { Link } from 'wouter';" in content:
        content = content.replace(
            "import { Link } from 'wouter';",
            "import { useEffect } from 'react';\nimport { Link } from 'wouter';"
        )
    elif 'import { Link } from "wouter";' in content:
        content = content.replace(
            'import { Link } from "wouter";',
            "import { useEffect } from 'react';\nimport { Link } from \"wouter\";"
        )
    
    # Find the function component and add useEffect after the opening
    # Pattern: export default function ComponentName() {
    pattern = r'(export default function \w+\(\) \{)'
    
    scroll_effect = '''
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
'''
    
    content = re.sub(pattern, r'\1' + scroll_effect, content)
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"Updated {filename}")

print("\nDone! All blog posts now scroll to top on load.")
