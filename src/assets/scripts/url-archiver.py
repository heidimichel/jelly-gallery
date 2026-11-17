# TODO: install python and pip and playwright to make it work...
import os
import csv
import requests
from playwright.sync_api import sync_playwright

# 1. Provide your pre-collected list of product URLs here
product_urls = [
    "https://example.com/product/item-one",
    "https://example.com/product/item-two",
    # Add as many as you like! TODO: add urls from the brazilian website here. first do with like 10 of the for a test run
]

# Create a folder to store downloaded images
os.makedirs("archived_images", exist_ok=True)

# 2. Open a CSV file to save text data (encoding='utf-8' ensures special characters/accents save correctly)
csv_file_path = "product_archive.csv"
with open(csv_file_path, mode="w", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)
    
    # Write the header row
    writer.writerow(["Product Name", "Colors", "Description", "Image Filename", "Product URL"])

    with sync_playwright() as p:
        # Launch browser (headless=False lets you watch it work live)
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()

        for url in product_urls:
            try:
                print(f"Opening: {url}")
                page.goto(url)
                
                # TODO: Update these CSS selectors to match your target website's actual HTML
                name = page.locator("h1.product-title").inner_text().strip()
                description = page.locator("div.product-description").inner_text().strip()
                
                # Example for colors (joins multiple color names with commas)
                colors = ", ".join(page.locator("span.color-option-name").all_inner_texts())
                if not colors:
                    colors = "N/A"

                # Get the image source URL
                img_url = page.locator("img.main-product-image").get_attribute("src")
                
                # Clean up the product name to make it safe for a filename
                safe_name = "".join(c for c in name if c.isalnum() or c in (' ', '_', '-')).strip()
                img_filename = f"{safe_name}.jpg"
                
                if img_url:
                    if img_url.startswith("//"):
                        img_url = "https:" + img_url
                    
                    img_data = requests.get(img_url).content
                    img_path = os.path.join("archived_images", img_filename)
                    with open(img_path, "wb") as handler:
                        handler.write(img_data)
                    print(f" -> Saved image: {img_filename}")
                else:
                    img_filename = "N/A"

                # 3. Write the product data row into the CSV file immediately
                writer.writerow([name, colors, description, img_filename, url])
                
                print(f" -> Archived: {name}")
                print("-" * 40)

            except Exception as e:
                print(f"Error scraping {url}: {e}")

        browser.close()
        print(f"Archiving complete! Data saved to {csv_file_path}")