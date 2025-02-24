import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const techPath = path.join(__dirname, "..", "public", "logos", "technology");
const logoAliasesPath = path.join(
  __dirname,
  "..",
  "src",
  "constants",
  "logoAliases.js"
);

// Read existing aliases
const existingContent = fs.readFileSync(logoAliasesPath, "utf8");
let logoAliases = {};

// Extract existing aliases using regex
const aliasesMatch = existingContent.match(/const logoAliases = {([^}]+)}/s);
if (aliasesMatch) {
  eval("logoAliases = {" + aliasesMatch[1] + "}");
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

// Convert to string format
const aliasesString = Object.entries(logoAliases)
  .sort()
  .map(([key, value]) => `  ${key}: ${JSON.stringify(value)}`)
  .join(",\n");

// Create new content
const newContent = `const logoAliases = {\n${aliasesString}\n};\n\nexport default logoAliases;\n`;

// Write back to file
fs.writeFileSync(logoAliasesPath, newContent);
console.log("logoAliases.js updated successfully!");
