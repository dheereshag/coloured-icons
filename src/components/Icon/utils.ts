import { Icon } from "@/interfaces";

// Compute a good display size for an icon based on its classes and category
export const computeIconSize = (icon: Icon) => {
  const iconClass = icon.classes[0] ?? "";
  const iconCategory = (icon.category || "").toLowerCase();
  switch (true) {
    case iconClass.includes("horizontal"):
    case iconClass.includes("wordmark"):
      return 5;
    case iconClass.includes("vertical"):
      return 4;
    case iconCategory === "animals":
      return 3;
    default:
      return 2;
  }
};
