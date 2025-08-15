import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ModalTopBarProps {
  onClose: () => void;
}

const ModalTopBar: React.FC<ModalTopBarProps> = ({ onClose }) => {
  return (
    <div className="sticky top-0 right-0 z-10 bg-white/80 backdrop-blur-xl py-4 px-8">
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100/80 transition-colors cursor-pointer"
      >
        <X className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default ModalTopBar;
