interface Icon {
  name: string;
  classes: string[];
}
interface IconCardProps {
  icon: Icon;
}

const IconCard = ({ icon }: IconCardProps) => {
  return (
    <div
      key={icon.name}
      className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white shadow-xs border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all"
    >
      <i className={`ci ci-${icon.classes[0]} ci-3x text-gray-800`}></i>
      <span className="text-sm font-medium text-gray-600">{icon.name}</span>
    </div>
  );
};

export default IconCard;
