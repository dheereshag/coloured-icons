import { Check } from "lucide-react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface SelectedProps {
  selected: boolean;
  active: boolean;
  category: { name: string };
}

const Selected: React.FC<SelectedProps> = ({ selected, active, category }) => {
  return (
    <>
      <span
        className={classNames(
          selected
            ? "font-semibold text-gray-900"
            : "font-medium text-gray-600",
          "block truncate"
        )}
      >
        {category.name}
      </span>
      {selected && (
        <span
          className={classNames(
            active ? "text-gray-900" : "text-gray-600",
            "absolute inset-y-0 right-0 flex items-center pr-4"
          )}
        >
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
      )}
    </>
  );
};

export default Selected;
