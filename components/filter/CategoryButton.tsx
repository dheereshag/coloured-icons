"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@/interfaces";
import { CategoryIcon } from ".";

interface CategoryButtonProps {
  category: Category;
  isSelected: boolean;
  onClick: (category: Category) => void;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  isSelected,
  onClick,
}) => {
  return (
    <Button
      variant="ghost"
      onClick={() => onClick(category)}
      className={cn(
        "inline-flex items-center whitespace-nowrap lg:justify-start transition-transform duration-150 active:scale-95",
        isSelected
          ? "bg-purple-600 text-white shadow-lg hover:bg-purple-700 hover:text-white"
          : "text-gray-600 hover:bg-purple-50 hover:text-purple-600",
      )}
    >
      <CategoryIcon name={category.name} />
      {category.name}
    </Button>
  );
};
