import { Icon } from "@/interfaces";
import { IconCode } from ".";
import { computeIconSize } from "@/lib/utils";

interface UsageListProps {
  icon: Icon;
  onHover: (iconClass: string | null) => void;
}

const UsageList: React.FC<UsageListProps> = ({ icon, onHover }) => {
  return (
    <div className="space-y-4">
      {icon.classes.map((iconClass) => (
        <div
          key={iconClass}
          className={`bg-gray-300 px-2 rounded-xl flex items-center gap-4 shadow-xs h-20`}
        >
          <i
            className={`ci ci-${iconClass} ci-${computeIconSize(
              icon
            )}x mx-3 py-auto cursor-pointer transition-all duration-200`}
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

export default UsageList;
