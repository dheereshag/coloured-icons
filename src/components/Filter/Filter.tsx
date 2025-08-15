"use client";
import { Icon, Category } from "@/interfaces";
import { useContext, useState } from "react";
import { Dropdown } from ".";
import { IconList } from "@/components/Icon";
import dynamic from "next/dynamic";
import { icons, categories } from "@/constants";
import { SearchContext } from "@/context/SearchContextProvider";
import { isDevelopmentMode, limitIconsInDev } from "@/lib/dev-utils";
import DevModeBanner from "./DevModeBanner";
import CategoryButton from "./CategoryButton";

// Load Modal lazily on the client only when needed
const Modal = dynamic(() => import("@/components/Modal"), { ssr: false });

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedIcon, setSelectedIcon] = useState<Icon | null>(null);
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
      <DevModeBanner />

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="hidden sm:flex flex-row lg:flex-col gap-1.5 text-sm lg:w-64 shrink-0 overflow-x-auto pb-2 lg:pb-0">
          {categories.map((category: Category) => (
            <CategoryButton
              key={category.name}
              category={category}
              isSelected={selectedCategory.name === category.name}
              onClick={handleCategoryChange}
            />
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

        {isModalOpen && selectedIcon && (
          <Modal icon={selectedIcon} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Filter;
