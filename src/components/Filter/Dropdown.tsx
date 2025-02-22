"use client";

import { IoCheckmark } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LuChevronsUpDown } from "react-icons/lu";
import { Category } from "@/interfaces";
import { useState } from "react";

interface DropdownProps {
  categories: Category[];
  onCategoryChange?: (category: Category) => void;
  getCategoryIcon: (categoryName: string) => React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  categories,
  onCategoryChange,
  getCategoryIcon,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <span className="flex items-center">
            {value && getCategoryIcon(value)}
            {value
              ? categories.find((category) => category.name === value)?.name
              : "Select category..."}
          </span>
          <LuChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" align="start">
        <Command>
          <CommandInput placeholder="Search category..." className="h-9" />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category.name}
                  value={category.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    const selectedCategory = categories.find(
                      (cat) => cat.name === currentValue
                    );
                    if (selectedCategory && onCategoryChange) {
                      onCategoryChange(selectedCategory);
                    }
                    setOpen(false);
                  }}
                >
                  <span className="flex items-center">
                    {getCategoryIcon(category.name)}
                    {category.name}
                  </span>
                  <IoCheckmark
                    className={cn(
                      "ml-auto",
                      value === category.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Dropdown;
