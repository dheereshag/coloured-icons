import os


def get_folder_names():
    folder_path = "public/logos/technology"
    return set(os.listdir(folder_path))


def get_keys_from_file():
    keys = set()
    with open("cleaned_output.txt", "r") as file:
        for line in file:
            if ":" in line:
                key = line.split(":")[0].strip()
                keys.add(key)
    return keys


def main():
    folder_names = get_folder_names()
    file_keys = get_keys_from_file()

    missing_keys = file_keys - folder_names
    if missing_keys:
        print("Keys in cleaned_output.txt that don't have corresponding folders:")
        for key in sorted(missing_keys):
            print(key)
    else:
        print("All keys in cleaned_output.txt have corresponding folders.")


if __name__ == "__main__":
    main()
