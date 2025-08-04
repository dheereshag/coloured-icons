import { Icon } from "@/interfaces";

/**
 * Utility function to limit icons per category in development mode
 * @param icons - Array of all icons
 * @param limit - Number of icons to show per category (default: 5)
 * @returns Limited array of icons if in development mode, otherwise original array
 */
const limitIconsInDev = (icons: Icon[], limit: number = 5): Icon[] => {
  // Check if we're in development mode
  const isDevelopment = process.env.NODE_ENV === "development";

  if (!isDevelopment) {
    console.log("Production mode: Showing all icons");
    return icons;
  }

  console.log(`Development mode: Limiting to ${limit} icons per category`);

  // Group icons by category
  const iconsByCategory: { [key: string]: Icon[] } = {};

  icons.forEach((icon) => {
    const category = icon.category.toLowerCase();
    if (!iconsByCategory[category]) {
      iconsByCategory[category] = [];
    }
    iconsByCategory[category].push(icon);
  });

  // Limit icons per category and flatten back to array
  const limitedIcons: Icon[] = [];

  Object.entries(iconsByCategory).forEach(([category, categoryIcons]) => {
    const limitedCategoryIcons = categoryIcons.slice(0, limit);
    limitedIcons.push(...limitedCategoryIcons);
    console.log(
      `${category}: ${limitedCategoryIcons.length}/${categoryIcons.length} icons`
    );
  });

  console.log(`Total icons: ${limitedIcons.length}/${icons.length}`);
  return limitedIcons;
};

/**
 * Check if currently in development mode
 * @returns boolean indicating if in development mode
 */
const isDevelopmentMode = (): boolean => {
  return process.env.NODE_ENV === "development";
};
export { isDevelopmentMode, limitIconsInDev };
