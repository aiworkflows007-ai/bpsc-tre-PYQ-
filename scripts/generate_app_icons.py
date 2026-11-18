#!/usr/bin/env python3
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, 'public')
os.makedirs(PUB, exist_ok=True)

def generate_icon(size, out_path):
    img = Image.new('RGBA', (size, size), (16, 42, 67, 255))
    draw = ImageDraw.Draw(img)
    
    # Draw rounded rectangle background with subtle gradient/border
    margin = size // 16
    r = size // 5
    draw.rounded_rectangle([margin, margin, size - margin, size - margin], radius=r, fill=(14, 95, 89, 255), outline=(245, 158, 11, 255), width=size // 32)
    
    # Center text 'TRE'
    # Try default font or basic shapes
    # Draw a clean stylized 'T' in gold and emerald
    center_x = size // 2
    top_y = size // 4
    bar_h = size // 7
    bar_w = size // 2
    stem_w = size // 7
    stem_h = size // 2
    
    # Crossbar
    draw.rounded_rectangle([center_x - bar_w // 2, top_y, center_x + bar_w // 2, top_y + bar_h], radius=size // 40, fill=(245, 158, 11, 255))
    # Stem
    draw.rounded_rectangle([center_x - stem_w // 2, top_y, center_x + stem_w // 2, top_y + stem_h], radius=size // 40, fill=(255, 255, 255, 255))
    
    # Checkmark accent in emerald
    check_coords = [
        (center_x + size // 6, top_y + stem_h // 2),
        (center_x + size // 4, top_y + stem_h * 3 // 4),
        (center_x + size // 2 - size // 16, top_y + stem_h // 4)
    ]
    draw.line(check_coords, fill=(16, 185, 129, 255), width=size // 20)
    
    img.save(out_path)
    print(f"Generated {out_path} ({size}x{size})")

generate_icon(192, os.path.join(PUB, 'icon-192.png'))
generate_icon(512, os.path.join(PUB, 'icon-512.png'))
