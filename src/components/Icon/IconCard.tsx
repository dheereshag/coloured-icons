import { Icon } from "@/interfaces";

interface IconCardProps {
  icon: Icon;
}

const IconCard: React.FC<IconCardProps> = ({ icon }) => {
  return (
    <div className="rounded-lg border-2 hover:border-blue-500 hover:cursor-pointer flex gap-3 p-3 sm:p-4 items-center w-full">
      <i className={`ci ci-${icon.classes[0]} ci-2x sm:ci-3x`}></i>
      <span className="flex flex-col gap-1">
        <h4 className="text-gray-800 font-semibold truncate text-sm">
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
