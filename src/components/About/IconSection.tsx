import { icons } from "@/constants";
import React from "react";
import { IconCard } from "../Icon";
interface Icon {
  name: string;
  classes: string[];
  category: string;
  url: string;
}
interface IconSectionProps {
  title: string;
  type: "tech" | "social";
}
// Updated showcase icons with both tech and social icons
const showcaseIcons = {
  tech: [
    "react",
    "nextjs",
    "typescript",
    "tailwind",
    "javascript",
    "python",
    "nodejs",
    "vscode",
  ],
  social: [
    "github",
    "linkedin",
    "twitter",
    "instagram",
    "facebook",
    "youtube",
    "discord",
    "twitch",
  ],
};

const getIconsByType = (type: "tech" | "social") => {
  return icons.filter((icon) =>
    showcaseIcons[type].includes(icon.classes[0].toLowerCase())
  );
};

const IconSection: React.FC<IconSectionProps> = ({ title, type }) => {
  return (
    <>
      <h3 className="text-lg font-medium text-gray-800 mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {getIconsByType(type).map((icon: Icon) => (
          <IconCard key={icon.name} icon={icon} />
        ))}
      </div>
    </>
  );
};

export default IconSection;
