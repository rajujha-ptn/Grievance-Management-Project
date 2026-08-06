from PIL import Image
import os
import sys

def get_dominant_colors(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        
        # Get colors
        colors = img.getcolors(maxcolors=100000)
        
        # Filter out transparent and near-white/near-black backgrounds if needed
        # But we can just find the most common non-white, non-transparent color
        valid_colors = []
        for count, color in colors:
            r, g, b, a = color
            if a > 10:
                # ignore whiteish backgrounds
                if not (r > 240 and g > 240 and b > 240):
                    valid_colors.append((count, (r, g, b)))
        
        valid_colors.sort(reverse=True, key=lambda x: x[0])
        
        # Print top 3 colors
        print(f"Colors for {os.path.basename(image_path)}:")
        for i in range(min(3, len(valid_colors))):
            r, g, b = valid_colors[i][1]
            hex_color = f"#{r:02x}{g:02x}{b:02x}"
            print(f"  {hex_color} (count: {valid_colors[i][0]})")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

# The user uploaded the images to the tempmediaStorage
media_dir = "/Users/rajujha/.gemini/antigravity-ide/brain/tempmediaStorage"
for f in os.listdir(media_dir):
    if f.endswith(".png") or f.endswith(".jpg"):
        get_dominant_colors(os.path.join(media_dir, f))
