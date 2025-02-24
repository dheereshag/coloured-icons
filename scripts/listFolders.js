import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logosPath = path.join(__dirname, "..", "public", "logos");
const cssPath = path.join(__dirname, "..", "src", "app", "logos.css");

let cssContent = "";

// Map of logo aliases
const logoAliases = {
  codeforces: ["cf"],
  discord: ["dc"],
  digitalocean: ["do"],
  ethereum: ["eth"],
  facebook: ["fb"],
  golang: ["go"],
  leetcode: ["lc"],
  microsoft: ["msft", "ms"],
  nodejs: ["node"],
  expressjs: ["express"],
  instagram: ["insta"],
  nuxtjs: ["nuxt"],
  nextjs: ["next"],
  ola: ["olacabs"],
  reactjs: ["react"],
  adonisjs: ["adonis"],
  alpinejs: ["alpine"],
  avajs: ["ava"],
  backbonejs: ["backbone"],
  blueprintjs: ["blueprint"],
  bulmaui: ["bulma"],
  bunjs: ["bun"],
  cassandradb: ["cassandra"],
  chakraui: ["chakra"],
  chatgpt: ["openai"],
  elementui: ["element"],
  emberjs: ["ember"],
  faunadb: ["fauna"],
  ringcentral: ["rc"],
  youtube: ["yt"],
  cplusplus: ["cpp"],
  louisvuitton: ["lv"],
  framer: ["framer-motion"],
  bluesky: ["bsky"],
  flyio: ["fly"],
  gatsbyjs: ["gatsby"],
  gridsomejs: ["gridsome"],
  gruntjs: ["grunt"],
  mariadb: ["maria"],
  marrionettejs: ["marionette"],
  mochajs: ["mocha"],
  nestjs: ["nest"],
  pixijs: ["pixi"],
  prestodb: ["presto"],
  pugjs: ["pug"],
  radixui: ["radix"],
  vuejs: ["vue"],
  typescript: ["ts"],
  javascript: ["js"],
  rollupjs: ["rollup"],
  semanticui: ["semantic"],
  solidjs: ["solid"],
  unjs: ["un"],
  woocommerce: ["woo"]
};

// NEW: Function to parse CSS rules into groups by URL
const parseCssGroups = (content) => {
  const urlGroups = new Map();
  const regex = /([^{}]+)\{[^}]*url\(["']([^"']+)["']\)[^}]*\}/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const selectorsText = match[1].trim();
    const url = match[2].trim();
    const selectors = selectorsText
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s);
    if (!urlGroups.has(url)) {
      urlGroups.set(url, new Set());
    }
    selectors.forEach((selector) => urlGroups.get(url).add(selector));
  }
  return urlGroups;
};

// Updated: processFolder now accepts folderPath, folderName and category
const processFolder = (folderPath, folderName, category) => {
  // No longer reassign folderPath here since it's passed in
  const files = fs.readdirSync(folderPath);

  // Group files by their base name (without -light suffix)
  const fileGroups = {};

  files.forEach((file) => {
    const baseName = file.replace("-light.", ".").replace(/\.[^/.]+$/, ""); // Remove extension and -light
    if (!fileGroups[baseName]) {
      fileGroups[baseName] = { dark: null, light: null };
    }
    if (file.includes("-light.")) {
      fileGroups[baseName].light = file;
    } else {
      fileGroups[baseName].dark = file;
    }
  });

  // Check if base logo exists, if not use wordmark as default
  const hasBaseLogo = Object.keys(fileGroups).some(
    (name) => name === folderName
  );
  const hasWordmark = Object.keys(fileGroups).some(
    (name) => name === `${folderName}-wordmark`
  );
  const defaultBase = hasBaseLogo
    ? folderName
    : hasWordmark
    ? `${folderName}-wordmark`
    : null;

  if (!defaultBase) return; // Skip if neither base nor wordmark exists

  // Process each group of files
  Object.entries(fileGroups).forEach(([baseName, variants]) => {
    // If using wordmark as default, include both base and wordmark classes
    if (!hasBaseLogo && baseName === `${folderName}-wordmark`) {
      if (variants.dark) {
        cssContent += `.ci-${folderName},
.ci-${folderName}-dark,
.ci-${folderName}-wordmark,
.ci-${folderName}-wordmark-dark {
  content: url("../../public/logos/${category}/${folderName}/${variants.dark}");
}\n\n`;
      }
      if (variants.light) {
        cssContent += `.ci-${folderName}-light,
.ci-${folderName}-wordmark-light {
  content: url("../../public/logos/${category}/${folderName}/${variants.light}");
}\n\n`;
      }
    } else {
      const className = baseName;

      // Function to generate class names including aliases; prepend folderName if missing
      const generateClassNames = (baseClassName) => {
        const normalizedBase = baseClassName.startsWith(folderName)
          ? baseClassName
          : `${folderName}-${baseClassName}`;
        let classes = [normalizedBase];

        const baseNameWithoutPrefix = normalizedBase.replace(
          `${folderName}-`,
          ""
        );
        if (logoAliases[folderName]) {
          logoAliases[folderName].forEach((alias) => {
            if (normalizedBase === folderName) {
              classes.push(alias);
            } else {
              classes.push(`${alias}-${baseNameWithoutPrefix}`);
            }
          });
        }
        return classes.join(",\n.ci-");
      };

      if (variants.dark && variants.light) {
        // For vertical/stacked variants
        if (className.includes("vertical") || className.includes("stacked")) {
          const baseClass = className
            .replace("vertical", "")
            .replace("stacked", "");
          cssContent += `.ci-${generateClassNames(baseClass + "vertical")},
.ci-${generateClassNames(baseClass + "vertical-dark")},
.ci-${generateClassNames(baseClass + "stacked")},
.ci-${generateClassNames(baseClass + "stacked-dark")} {
  content: url("../../public/logos/${category}/${folderName}/${variants.dark}");
}\n\n`;
          cssContent += `.ci-${generateClassNames(
            baseClass + "vertical-light"
          )},
.ci-${generateClassNames(baseClass + "stacked-light")} {
  content: url("../../public/logos/${category}/${folderName}/${
            variants.light
          }");
}\n\n`;
        }
        // For horizontal/inline variants
        else if (
          className.includes("horizontal") ||
          className.includes("inline")
        ) {
          const baseClass = className
            .replace("horizontal", "")
            .replace("inline", "");
          cssContent += `.ci-${generateClassNames(baseClass + "horizontal")},
.ci-${generateClassNames(baseClass + "horizontal-dark")},
.ci-${generateClassNames(baseClass + "inline")},
.ci-${generateClassNames(baseClass + "inline-dark")} {
  content: url("../../public/logos/${category}/${folderName}/${variants.dark}");
}\n\n`;
          cssContent += `.ci-${generateClassNames(
            baseClass + "horizontal-light"
          )},
.ci-${generateClassNames(baseClass + "inline-light")} {
  content: url("../../public/logos/${category}/${folderName}/${
            variants.light
          }");
}\n\n`;
        }
        // Regular case
        else {
          cssContent += `.ci-${generateClassNames(className)},
.ci-${generateClassNames(className + "-dark")} {
  content: url("../../public/logos/${category}/${folderName}/${variants.dark}");
}\n\n`;
          cssContent += `.ci-${generateClassNames(className + "-light")} {
  content: url("../../public/logos/${category}/${folderName}/${
            variants.light
          }");
}\n\n`;
        }
      } else if (variants.dark) {
        // For vertical/stacked variants
        if (className.includes("vertical") || className.includes("stacked")) {
          const baseClass = className
            .replace("vertical", "")
            .replace("stacked", "");
          cssContent += `.ci-${generateClassNames(baseClass + "vertical")},
.ci-${generateClassNames(baseClass + "vertical-dark")},
.ci-${generateClassNames(baseClass + "vertical-light")},
.ci-${generateClassNames(baseClass + "stacked")},
.ci-${generateClassNames(baseClass + "stacked-dark")},
.ci-${generateClassNames(baseClass + "stacked-light")} {
  content: url("../../public/logos/${category}/${folderName}/${variants.dark}");
}\n\n`;
        }
        // For horizontal/inline variants
        else if (
          className.includes("horizontal") ||
          className.includes("inline")
        ) {
          const baseClass = className
            .replace("horizontal", "")
            .replace("inline", "");
          cssContent += `.ci-${generateClassNames(baseClass + "horizontal")},
.ci-${generateClassNames(baseClass + "horizontal-dark")},
.ci-${generateClassNames(baseClass + "horizontal-light")},
.ci-${generateClassNames(baseClass + "inline")},
.ci-${generateClassNames(baseClass + "inline-dark")},
.ci-${generateClassNames(baseClass + "inline-light")} {
  content: url("../../public/logos/${category}/${folderName}/${variants.dark}");
}\n\n`;
        }
        // Regular case
        else {
          cssContent += `.ci-${generateClassNames(className)},
.ci-${generateClassNames(className + "-dark")},
.ci-${generateClassNames(className + "-light")} {
  content: url("../../public/logos/${category}/${folderName}/${variants.dark}");
}\n\n`;
        }
      }
    }
  });
};

// Updated: Iterate categories and then logo folders
fs.readdir(logosPath, (err, categories) => {
  if (err) {
    console.error(`Error reading directory ${logosPath}: ${err}`);
    return;
  }

  // Process each category folder to generate CSS and icons
  categories.forEach((category) => {
    const categoryPath = path.join(logosPath, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const folders = fs.readdirSync(categoryPath);
      folders.forEach((folder) => {
        const fullFolderPath = path.join(categoryPath, folder);
        if (fs.statSync(fullFolderPath).isDirectory()) {
          processFolder(fullFolderPath, folder, category);
        }
      });
    }
  });

  // Write the CSS file first
  fs.writeFileSync(cssPath, cssContent);

  // NEW: Read, sort, and rewrite the CSS file
  try {
    const content = fs.readFileSync(cssPath, "utf8");
    const urlGroups = parseCssGroups(content);
    const sortedUrls = Array.from(urlGroups.keys()).sort();
    let sortedContent = "";
    sortedUrls.forEach((url) => {
      const selectors = Array.from(urlGroups.get(url)).sort();
      sortedContent += `${selectors.join(
        ",\n"
      )} {\n  content: url("${url}");\n}\n\n`;
    });
    fs.writeFileSync(cssPath, sortedContent);
    console.log("CSS file generated and sorted successfully!");
  } catch (error) {
    console.error(`Error sorting CSS file: ${error}`);
  }

  // Helper function to title-case a phrase except for the word "and"
  const toTitleCase = (str) => {
    return str
      .split(" ")
      .map((word) =>
        word.toLowerCase() === "and"
          ? "and"
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
  };

  // NEW: Generate icons.ts based on folders; exclude folders with "stacked" or "inline"
  let iconsArr = [];
  const categoriesIcon = fs.readdirSync(logosPath);
  categoriesIcon.forEach((category) => {
    const categoryPath = path.join(logosPath, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const folders = fs.readdirSync(categoryPath);
      folders.forEach((folder) => {
        if (
          !folder.toLowerCase().includes("stacked") &&
          !folder.toLowerCase().includes("inline")
        ) {
          const fullFolderPath = path.join(categoryPath, folder);
          if (fs.statSync(fullFolderPath).isDirectory()) {
            const files = fs.readdirSync(fullFolderPath);
            // Group files by base name (without "-light" & extension) and track dark/light
            const fileGroups = {};
            files.forEach((file) => {
              const isLight = file.includes("-light");
              const baseName = file
                .replace("-light", "")
                .replace(/\.[^/.]+$/, "");
              if (!fileGroups[baseName])
                fileGroups[baseName] = { dark: false, light: false };
              if (isLight) fileGroups[baseName].light = true;
              else fileGroups[baseName].dark = true;
            });
            // Group files & build classes array with both dark and light variants
            let classes = [];
            Object.entries(fileGroups).forEach(([base, variants]) => {
              // If base equals folder, use it as is; otherwise prepend folder name
              const baseClass = base.startsWith(folder)
                ? base
                : `${folder}-${base}`;
              if (variants.dark) classes.push(baseClass);
              if (variants.light) classes.push(`${baseClass}-light`);
            });
            // Remove any invalid names; fallback to folder if empty
            classes = classes.filter(
              (cls) =>
                !cls.toLowerCase().includes("stacked") &&
                !cls.toLowerCase().includes("inline")
            );
            if (classes.length === 0) classes = [folder];
            // NEW: Sort the classes array
            classes.sort();

            // NEW: Capitalize the name and update URL based on rules
            let displayName =
              folder.charAt(0).toUpperCase() + folder.slice(1).toLowerCase();
            let iconUrl = `${folder}.com`;
            switch (folder.toLowerCase()) {
              case "alan":
                displayName = "Alan AI";
                iconUrl = "alan.app";
                break;
              case "go":
                iconUrl = "go.dev";
                break;
              case "aws":
                displayName = "AWS";
                break;
              case "eth":
                iconUrl = "ethereum.org";
                break;
              case "cpp":
                displayName = "C++";
                iconUrl = "isocpp.org";
                break;
              case "csharp":
                displayName = "C#";
                break;
              case "do":
                displayName = "DigitalOcean";
                break;
              case "css":
                displayName = "CSS";
                break;
              case "louisvuitton":
                displayName = "Louis Vuitton";
                break;
              case "jnj":
                displayName = "Johnson & Johnson";
                break;
              case "ts":
                displayName = "TypeScript";
                break;
              case "js":
                displayName = "JavaScript";
                break;
              case "php":
                displayName = "php";
                break;
              case "kfc":
                displayName = "KFC";
                break;
              case "react-native":
                displayName = "React Native";
                break;
              case "buymeacoffee":
                displayName = "Buy Me a Coffee";
                break;
              case "bmw":
                displayName = "BMW";
                break;
              case "burgerking":
                displayName = "BurgerKing";
                break;
              case "hsbc":
                displayName = "HSBC";
                break;
              case "phonepe":
                displayName = "PhonePe";
                break;
              case "rayban":
                displayName = "Ray-Ban";
                break;
              case "mysql":
                displayName = "MySQL";
                break;
              case "opensea":
                displayName = "OpenSea";
                break;
              case "orcid":
                displayName = "ORCID";
                break;
              case "html":
                displayName = "HTML";
                break;
              case "jquery":
                displayName = "jQuery";
                break;
              case "mui":
                displayName = "MUI";
                break;
              case "365":
              case "teams":
              case "word":
              case "visio":
              case "sway":
              case "sharepoint":
              case "project":
              case "powerpoint":
              case "outlook":
              case "onenote":
              case "onedrive":
              case "delve":
              case "forms":
              case "excel":
              case "access":
                iconUrl = "office.com";
                break;
              case "angular":
                iconUrl = "angular.dev";
                break;
              case "bluesky":
                iconUrl = "bsky.app";
                break;
              case "infura":
                iconUrl = "infura.io";
                break;
              case "c":
                iconUrl = "learn-c.org";
                break;
              default:
                break;
            }

            iconsArr.push({
              name: displayName,
              category: category,
              classes: classes,
              url: iconUrl,
            });
          }
        }
      });
    }
  });
  const iconsContent = `const icons = ${JSON.stringify(
    iconsArr,
    null,
    2
  )};\nexport default icons;\n`;
  // updated file path to icons.ts
  const iconsPath = path.join(__dirname, "..", "src", "constants", "icons.ts");
  fs.writeFileSync(iconsPath, iconsContent);
  console.log("icons.ts generated successfully!");
});
