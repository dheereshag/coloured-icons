"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/kibo-ui/combobox";
import { Category } from "@/interfaces";
import { useState } from "react";
import { getCategoryIcon } from "./CategoryIcon";

interface DropdownProps {
  categories: Category[];
  onCategoryChange?: (category: Category) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  categories,
  onCategoryChange,
}) => {
  const [value, setValue] = useState("");

  const categoryData = categories.map((category) => ({
    value: category.name,
    label: category.name,
    category: category,
  }));

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    const selectedCategory = categories.find((cat) => cat.name === newValue);
    if (selectedCategory && onCategoryChange) {
      onCategoryChange(selectedCategory);
    }
  };

  return (
    <Combobox
      data={categoryData}
      onValueChange={handleValueChange}
      type="category"
    >
      <ComboboxTrigger className="w-full" />
      <ComboboxContent>
        <ComboboxInput placeholder="Search category..." />
        <ComboboxEmpty>No category found.</ComboboxEmpty>
        <ComboboxList>
          <ComboboxGroup>
            {categories.map((category) => (
              <ComboboxItem key={category.name} value={category.name}>
                <span className="flex items-center gap-2">
                  {getCategoryIcon(category.name)}
                  {category.name}
                </span>
              </ComboboxItem>
            ))}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default Dropdown;
