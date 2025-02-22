import { icons } from "@/constants";
import React from "react";

interface Icon {
  name: string;
  classes: string[];
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
          <div
            key={icon.name}
            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white shadow-xs border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all"
          >
            <i className={`ci ci-${icon.classes[0]} ci-3x text-gray-800`}></i>
            <span className="text-sm font-medium text-gray-600">
              {icon.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default IconSection;
