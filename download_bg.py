import urllib.request
import ssl

ssl._create_default_https_context = ssl._create_unverified_context
url = "https://cdn.coverr.co/videos/coverr-crowd-at-a-concert-5156/1080p.mp4"
output = "public/hero.mp4"

print(f"Downloading {url}...")
try:
    req = urllib.request.Request(
        url, 
        data=None, 
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36'
        }
    )
    with urllib.request.urlopen(req) as response, open(output, 'wb') as out_file:
        out_file.write(response.read())
    print("Download complete!")
except Exception as e:
    print(f"Failed: {e}")
