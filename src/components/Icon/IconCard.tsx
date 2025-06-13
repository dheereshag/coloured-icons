import { Icon } from "@/interfaces";

interface IconCardProps {
  icon: Icon;
}

const size = (icon: Icon) => {
  const iconCategory = icon.category.toLowerCase();
  switch (true) {
    case iconCategory === "animals":
      return 3;
    default:
      return 2;
  }
};

const IconCard: React.FC<IconCardProps> = ({ icon }) => {
  return (
    <div className="rounded-lg border-2 hover:border-blue-500 hover:cursor-pointer flex gap-3 p-3 sm:p-4 items-center w-full">
      <i
        className={`ci ci-${icon.classes[0]} ci-${size(icon)}x sm:ci-${
          size(icon) + 1
        }x`}
      ></i>
      <span className="flex flex-col gap-1">
        <h4 className="text-gray-800 font-semibold truncate text-sm max-w-[230px] sm:max-w-[150px]">
          {icon.name}
        </h4>
        <h4 className="text-gray-400 text-xs truncate max-w-[150px]">
          {icon.url}
        </h4>
      </span>
    </div>
  );
};

export default IconCard;
