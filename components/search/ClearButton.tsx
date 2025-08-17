import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const ClearButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <Button
    variant="ghost"
    size="icon"
    className="absolute right-0 top-1/2 h-8 w-8 -translate-y-1/2 hover:bg-transparent transition-transform hover:scale-110 active:scale-95"
    onClick={onClick}
    aria-label="Clear search"
  >
    <X className="h-4 w-4" />
  </Button>
);
