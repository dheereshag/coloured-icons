import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesDir = path.join(__dirname, "public", "logos", "files");


function renameToBase(name) {
  // Remove everything after the first dash
  return name.split("-")[0];
}

function renameFoldersAndFiles() {
  if (!fs.existsSync(filesDir)) {
    console.log("Files directory does not exist");
    return;
  }

  const items = fs.readdirSync(filesDir);

  items.forEach((item) => {
    const itemPath = path.join(filesDir, item);

    // Only process directories
    if (fs.statSync(itemPath).isDirectory()) {
      console.log(`Processing folder: ${item}`);

      // Get new folder name
      const newFolderName = renameToBase(item);
      const newFolderPath = path.join(filesDir, newFolderName);

      // Check if new folder name already exists
      if (fs.existsSync(newFolderPath) && newFolderPath !== itemPath) {
        console.log(
          `Warning: Folder ${newFolderName} already exists, skipping ${item}`
        );
        return;
      }

      // Process SVG files inside the folder
      const filesInFolder = fs.readdirSync(itemPath);
      const svgFiles = filesInFolder.filter((file) => file.endsWith(".svg"));

      svgFiles.forEach((svgFile) => {
        const oldSvgPath = path.join(itemPath, svgFile);
        const newSvgName = renameToBase(svgFile.replace(".svg", "")) + ".svg";
        const newSvgPath = path.join(itemPath, newSvgName);

        // Rename the SVG file
        if (oldSvgPath !== newSvgPath) {
          console.log(`  Renaming file: ${svgFile} -> ${newSvgName}`);
          fs.renameSync(oldSvgPath, newSvgPath);
        }
      });

      // Rename the folder
      if (itemPath !== newFolderPath) {
        console.log(`  Renaming folder: ${item} -> ${newFolderName}`);
        fs.renameSync(itemPath, newFolderPath);
      }

      console.log(`  ✓ Completed processing ${item}`);
    }
  });

  console.log("Renaming process completed!");
}

renameFoldersAndFiles();
