import { Icon } from "@/interfaces";
import { Card, CardContent } from "@/components/ui/card";
import { computeIconSize } from "@/lib/utils";

interface IconCardProps {
  icon: Icon;
  onClick?: () => void;
}

export const IconCard: React.FC<IconCardProps> = ({ icon, onClick }) => {
  return (
    <Card
      onClick={onClick}
      className="w-full text-left rounded-lg border-2 p-0 cursor-pointer hover:border-purple-400 hover:shadow-md transition-transform duration-200 hover:scale-[1.015]"
    >
      <CardContent className="flex gap-3 p-3 sm:p-4 items-center w-full">
        <i
          className={`ci ci-${icon.classes[0]} ci-${computeIconSize(
            icon
          )}x sm:ci-${computeIconSize(icon) + 1}x`}
          aria-hidden="true"
        ></i>
        <span className="flex flex-col gap-1">
          <h4 className="text-gray-800 font-semibold truncate text-sm max-w-[230px] sm:max-w-[150px]">
            {icon.name}
          </h4>
          <h4 className="text-gray-400 text-xs truncate max-w-[150px]">
            {icon.url}
          </h4>
        </span>
      </CardContent>
    </Card>
  );
};
