"use client";
import { Category } from "@/interfaces";
import { useState, useContext } from "react";
import { Dropdown, DevModeBanner, CategoryList, IconList } from ".";
import { icons, categories } from "@/constants";
import { SearchContext } from "@/context/SearchContextProvider";
import { isDevelopmentMode, limitIconsInDev } from "@/lib/dev-utils";

export const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );
  const { search } = useContext(SearchContext);

  // Use development-limited icons in dev mode, full icons in production
  const iconsToUse = isDevelopmentMode() ? limitIconsInDev(icons) : icons;

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Development mode indicator */}
      <DevModeBanner />

      <div className="flex flex-col lg:flex-row gap-6">
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
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
            search={search}
          />
        </div>
      </div>
    </div>
  );
};
