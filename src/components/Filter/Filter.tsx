"use client";
import { Icon, Category } from "@/interfaces";
import { useContext, useState } from "react";
import { Dropdown } from ".";
import { IconList, Modal } from "@/components/Icon";
import { icons, categories } from "@/constants";
import { SearchContext } from "@/context/SearchContextProvider";

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedIcon, setSelectedIcon] = useState<Icon | {}>({});
  const { search } = useContext(SearchContext);

  const handleIconClick = (icon: Icon) => {
    setSelectedIcon(icon);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="hidden sm:flex flex-row lg:flex-col gap-1.5 text-sm lg:w-64 shrink-0 overflow-x-auto pb-2 lg:pb-0">
        {categories.map((category: Category) => (
          <button
            key={category.name}
            className={`inline-flex items-center px-4 lg:px-5 py-2 font-medium rounded-lg whitespace-nowrap transition-all duration-200 ${
              selectedCategory.name === category.name
                ? "bg-purple-600 text-white shadow-lg hover:bg-purple-700"
                : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="sm:hidden w-full">
        <Dropdown
          categories={categories}
          selectedCategory={selectedCategory}
          onChange={handleCategoryChange}
        />
      </div>
      <div className="flex-1">
        <IconList
          icons={icons}
          selectedCategory={selectedCategory}
          handleIconClick={handleIconClick}
          search={search}
        />
      </div>

      {isModalOpen && (
        <Modal icon={selectedIcon as Icon} onClose={closeModal} />
      )}
    </div>
  );
};

export default Filter;
