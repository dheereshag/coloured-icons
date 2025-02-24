import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const techPath = path.join(__dirname, "..", "public", "logos", "technology");
// Updated path to logoAliases.json
const logoAliasesPath = path.join(
  __dirname,
  "..",
  "src",
  "constants",
  "logoAliases.json"
);

// Read existing aliases from JSON file
let logoAliases = {};
try {
  const existingContent = fs.readFileSync(logoAliasesPath, "utf8");
  logoAliases = JSON.parse(existingContent);
} catch (error) {
  console.error("Error reading or parsing logoAliases.json:", error);
}

// Read technology folder
const folders = fs.readdirSync(techPath);

// List of folders to exclude
const excludeFolders = ["vitejs"];

// List of suffixes to process
const suffixesToProcess = ["js", "db", "ui"];

// Filter folders and create new entries
folders
  .filter((folder) => {
    const folderLower = folder.toLowerCase();
    return (
      !excludeFolders.includes(folderLower) &&
      suffixesToProcess.some((suffix) => folderLower.endsWith(suffix))
    );
  })
  .forEach((folder) => {
    const key = folder.toLowerCase();
    let alias;

    // Handle different suffix cases
    if (key.endsWith("js")) {
      alias = key.replace("js", "");
    } else if (key.endsWith("db")) {
      alias = key.replace("db", "");
    } else if (key.endsWith("ui")) {
      alias = key.replace("ui", "");
    }

    if (!logoAliases[key] && alias) {
      logoAliases[key] = [alias];
    }
  });

// Convert object to pretty JSON
const newContent = JSON.stringify(logoAliases, null, 2);

// Write back to file
fs.writeFileSync(logoAliasesPath, newContent);
console.log("logoAliases.json updated successfully!");
