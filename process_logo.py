from PIL import Image

# Open the image provided by the user
img = Image.open('d:/promopower/public/logo.png').convert('RGBA')
datas = img.getdata()

newData = []
for item in datas:
    # item is (R, G, B, A)
    # Calculate luminance (0 = black, 255 = white)
    luminance = int(0.299*item[0] + 0.587*item[1] + 0.114*item[2])
    
    # We want the black text to become pure WHITE (so it shows on a dark nav bar)
    # And we want the white background to become fully TRANSPARENT
    # The darker the pixel, the more opaque it should be (alpha = 255 - luminance).
    
    # Apply a slight curve to alpha so that very light grey drop shadows fade out faster, keeping the edges clean.
    alpha = 255 - luminance
    # Thresholding hard white out
    if luminance > 240:
        alpha = 0
        
    newData.append((255, 255, 255, alpha))

img.putdata(newData)
img.save('d:/promopower/public/logo-transparent.png', 'PNG')
print("Successfully generated transparent white logo!")
