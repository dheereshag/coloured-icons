import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to 'animals' folder two directories up from current script
const animalsFolder = path.join(__dirname, "..", "public", "logos", "fashion");

fs.readdir(animalsFolder, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }

    files.forEach((file) => {
        const filePath = path.join(animalsFolder, file);
        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.error("Error reading file stats:", err);
                return;
            }

            if (stats.isFile()) {
                const nameWithoutExt = path.parse(file).name;
                // Extract base name by removing numbers at the end
                const baseName = nameWithoutExt.replace(/\d+$/, "");
                const newFolder = path.join(animalsFolder, baseName);

                // Create the new folder if it doesn't exist
                if (!fs.existsSync(newFolder)) {
                    fs.mkdirSync(newFolder);
                }

                // Move the file into the new folder
                const newFilePath = path.join(newFolder, file);
                fs.rename(filePath, newFilePath, (err) => {
                    if (err) {
                        console.error(`Error moving file ${file}:`, err);
                    } else {
                        console.log(`Moved ${file} to ${newFolder}`);
                    }
                });
            }
        });
    });
});
