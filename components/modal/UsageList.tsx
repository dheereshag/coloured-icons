"use client";
import { Icon } from "@/interfaces";
import { IconCode } from ".";
import { computeIconSize } from "@/lib/utils";

interface UsageListProps {
  icon: Icon;
  onHover: (iconClass: string | null) => void;
}

export const UsageList: React.FC<UsageListProps> = ({ icon, onHover }) => {
  return (
    <div className="space-y-4">
      {icon.classes.map((iconClass) => (
        <div
          key={iconClass}
          className="bg-slate-50 border border-slate-200 px-3 rounded-xl flex items-center gap-4 h-20 hover:border-slate-300 hover:bg-white transition-colors"
        >
          <i
            className={`ci ci-${iconClass} ci-${computeIconSize(icon)}x mx-3 cursor-pointer transition-all duration-200`}
            onMouseEnter={() => onHover(iconClass)}
            onMouseLeave={() => onHover(null)}
          />
          <div className="flex-1">
            <IconCode iconClass={iconClass} />
          </div>
        </div>
      ))}
    </div>
  );
};
