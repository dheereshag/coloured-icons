import { IconCard } from ".";
import { Icon, Category } from "@/interfaces";
import useFilteredIcons from "@/hooks/useFilteredIcons";

interface IconListProps {
  icons: Icon[];
  selectedCategory: Category;
  handleIconClick: (icon: Icon) => void;
  search: string;
}

const IconList: React.FC<IconListProps> = ({
  icons,
  selectedCategory,
  handleIconClick,
  search,
}) => {
  const filteredIcons = useFilteredIcons({
    icons,
    search,
    selectedCategory,
  });

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
      {filteredIcons.map((icon) => (
        <li key={icon.name}>
          <IconCard icon={icon} onClick={() => handleIconClick(icon)} />
        </li>
      ))}
    </ul>
  );
};

export default IconList;
