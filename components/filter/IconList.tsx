"use client"

import { IconCard } from ".";
import { Icon, Category } from "@/interfaces";
import useFilteredIcons from "@/hooks/useFilteredIcons";
import { Modal } from "@/components/modal";

interface IconListProps {
  icons: Icon[];
  selectedCategory: Category;
  search: string;
}

export const IconList: React.FC<IconListProps> = ({
  icons,
  selectedCategory,
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
          <Modal icon={icon} trigger={<IconCard icon={icon} />} />
        </li>
      ))}
    </ul>
  );
};
