import os
import re
import json


def get_url_mapping():
    mapping = {}
    with open("urls.txt", "r") as file:
        for line in file:
            if ":" in line:
                key, url = line.split(":", 1)
                mapping[key.strip()] = url.strip()
    return mapping


def update_icons(url_mapping):
    filename = "src/constants/icons.ts"
    try:
        with open(filename, "r") as file:
            content = file.read()

        new_content = content
        for key, new_url in url_mapping.items():
            pattern = (
                r"{"
                r"[^{]*?"  # non-greedy match of anything except {
                r'"classes"\s*:\s*\[\s*'  # match "classes": [
                rf'"{re.escape(key)}"'  # match the first class exactly
                r"[^{]*?"  # non-greedy match until url
                r'"url"\s*:\s*"([^"]+)"'  # capture the current url
                r"[^}]*?"  # non-greedy match until end of object
                r"}"
            )

            def replace_url(match):
                return match.group(0).replace(match.group(1), new_url)

            new_content, count = re.subn(
                pattern, replace_url, new_content, flags=re.DOTALL
            )
            if count:
                print(f"Updated URL for '{key}' to '{new_url}'")
            else:
                print(f"Warning: No match found for key '{key}'")

        if new_content != content:
            with open(filename, "w") as file:
                file.write(new_content)
            print("Successfully updated icons.ts")
        else:
            print("No changes were necessary in icons.ts")

    except FileNotFoundError:
        print(f"Error: Could not find {filename}")
    except Exception as e:
        print(f"Error updating icons: {str(e)}")


def main():
    url_mapping = get_url_mapping()
    if url_mapping:
        update_icons(url_mapping)
    else:
        print("No URL mappings found in urls.txt.")


if __name__ == "__main__":
    main()
