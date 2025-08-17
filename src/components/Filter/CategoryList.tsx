import { Category } from "@/interfaces";
import { CategoryButton } from ".";

interface Props {
  categories: Category[];
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryList: React.FC<Props> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="hidden sm:flex flex-row lg:flex-col gap-1.5 text-sm lg:w-64 shrink-0 overflow-x-auto pb-2 lg:pb-0">
      {categories.map((category: Category) => (
        <CategoryButton
          key={category.name}
          category={category}
          isSelected={selectedCategory.name === category.name}
          onClick={onCategoryChange}
        />
      ))}
    </div>
  );
};

export default CategoryList;
