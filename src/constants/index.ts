export { default as categories } from "./categories";
export { default as icons } from "./icons";
export { default as logoAliases } from "./logoAliases";
export { default as logoMeta } from "./logoMeta";

// Export development-limited icons
import iconsData from "./icons";
import { limitIconsInDev } from "@/lib/dev-utils";

export const devLimitedIcons = limitIconsInDev(iconsData);
