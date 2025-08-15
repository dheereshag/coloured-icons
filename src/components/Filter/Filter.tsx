"use client";
import { Icon, Category } from "@/interfaces";
import { useContext, useState } from "react";
import { Dropdown } from ".";
import { IconList } from "@/components/Icon";
import Modal from "@/components/Modal";
import { icons, categories } from "@/constants";
import { SearchContext } from "@/context/SearchContextProvider";
import { Button } from "@/components/ui/button";
import { isDevelopmentMode, limitIconsInDev } from "@/lib/dev-utils";
import { getCategoryIcon } from "@/components/Filter/CategoryIcon";

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedIcon, setSelectedIcon] = useState<Icon | {}>({});
  const { search } = useContext(SearchContext);

  // Use development-limited icons in dev mode, full icons in production
  const iconsToUse = isDevelopmentMode() ? limitIconsInDev(icons) : icons;

  const handleIconClick = (icon: Icon) => {
    setSelectedIcon(icon);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Development mode indicator */}
      {isDevelopmentMode() && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-sm text-yellow-800 font-medium">
              Development Mode: Showing 5 icons per category
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="hidden sm:flex flex-row lg:flex-col gap-1.5 text-sm lg:w-64 shrink-0 overflow-x-auto pb-2 lg:pb-0">
          {categories.map((category: Category) => (
            <Button
              key={category.name}
              variant={
                selectedCategory.name === category.name ? "default" : "ghost"
              }
              onClick={() => handleCategoryChange(category)}
              className={`inline-flex items-center whitespace-nowrap lg:justify-start ${
                selectedCategory.name === category.name
                  ? "bg-purple-600 text-white shadow-lg hover:bg-purple-700"
                  : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              }`}
            >
              {getCategoryIcon(category.name)}
              {category.name}
            </Button>
          ))}
        </div>
        <div className="sm:hidden w-full">
          <Dropdown
            categories={categories}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        <div className="flex-1">
          <IconList
            icons={iconsToUse}
            selectedCategory={selectedCategory}
            handleIconClick={handleIconClick}
            search={search}
          />
        </div>

        {isModalOpen && (
          <Modal icon={selectedIcon as Icon} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Filter;
