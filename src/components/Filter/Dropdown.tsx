import {
  Listbox,
  Transition,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ListBoxButton, Selected } from ".";
import { Category } from "@/interfaces";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface DropdownProps {
  categories: Category[];
  selectedCategory: Category;
  onChange: (value: Category) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  categories,
  selectedCategory,
  onChange,
}) => {
  return (
    <Listbox value={selectedCategory} onChange={onChange}>
      {({ open }) => (
        <div className="relative text-sm">
          <ListBoxButton selectedCategory={selectedCategory} />
          <Transition
            show={open}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white py-2 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-hidden">
              {categories.map((category: Category) => (
                <ListboxOption
                  key={category.name}
                  className={() =>
                    classNames(
                      "relative cursor-default select-none py-3 pl-4 pr-9 transition-colors duration-200"
                    )
                  }
                  value={category}
                >
                  {({ selected }) => (
                    <Selected
                      selected={selected}
                      category={category}
                      active={selectedCategory.name.toLowerCase() === category.name.toLowerCase()}
                    />
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

export default Dropdown;
