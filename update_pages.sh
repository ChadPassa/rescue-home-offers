#!/bin/bash

# List of pages to update (excluding Home.tsx which we'll handle separately)
PAGES=(
  "client/src/pages/FAQ.tsx"
  "client/src/pages/Solutions.tsx"
  "client/src/pages/Blog.tsx"
  "client/src/pages/NotFound.tsx"
  "client/src/pages/stories/SingleMotherStory.tsx"
  "client/src/pages/stories/CasinoWorkerStory.tsx"
  "client/src/pages/stories/NeighborhoodStory.tsx"
)

echo "Pages to update:"
for page in "${PAGES[@]}"; do
  if [ -f "$page" ]; then
    echo "  - $page (exists)"
  else
    echo "  - $page (NOT FOUND)"
  fi
done
