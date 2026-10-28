#!/bin/sh
# Builds grid thumbnails for public/gallery into public/gallery-thumbs (same paths).
# Re-run after adding gallery photos. Uses macOS `sips`; on Linux, swap in ImageMagick:
#   magick "$src" -resize 640x640\> -quality 72 "$dest"
set -e
cd "$(dirname "$0")/.."

find public/gallery -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) | while read -r src; do
  dest="public/gallery-thumbs/${src#public/gallery/}"
  if [ -f "$dest" ] && [ "$dest" -nt "$src" ]; then
    continue
  fi
  mkdir -p "$(dirname "$dest")"
  sips -Z 640 -s format jpeg -s formatOptions 72 "$src" --out "$dest" >/dev/null
done
