export { default as categories } from "./categories";
export { default as icons } from "./icons";

// Export development-limited icons
import iconsData from "./icons";
import { limitIconsInDev } from "@/lib/dev-utils";

export const devLimitedIcons = limitIconsInDev(iconsData);
