import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/interfaces";
import { IconCode } from ".";
import { X, ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface ModalProps {
  icon: Icon;
  onClose: () => void;
}

const size = (icon: Icon) => {
  const iconClass = icon.classes[0];
  const iconCategory = icon.category.toLowerCase();
  console.log(iconClass, iconCategory, typeof iconCategory);
  // returns iconSize
  switch (true) {
    case iconClass.includes("horizontal"):
    case iconClass.includes("wordmark"):
      return 5;
    case iconClass.includes("vertical"):
      return 4;
    case iconCategory === "animals":
      return 3;
    default:
      return 2;
  }
};

const Modal: React.FC<ModalProps> = ({ icon, onClose }) => {
  const [zoomedIcon, setZoomedIcon] = useState<string | null>(null);

  return (
    <>
      <Dialog open={true} onClose={onClose} className="relative z-50">
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="mx-auto max-w-2xl w-full rounded-2xl bg-white shadow-[0_0_50px_-12px] shadow-purple-500/10 border border-slate-200 max-h-[90vh] overflow-y-auto">
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

            <div className="mx-6 sm:mx-8 mb-8">
              {/* Icon preview */}
              <div className="flex items-center gap-8 mb-10">
                <div className="p-8 bg-linear-to-b from-slate-100 to-white rounded-2xl shadow-xs border border-slate-200">
                  <i
                    className={`ci ci-${icon.classes[0]} ci-4x text-slate-700`}
                  />
                </div>
                <div className="flex flex-col">
                  <DialogTitle className="text-2xl font-semibold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {icon.name}
                  </DialogTitle>
                  <Link
                    href={
                      icon.url.startsWith("http")
                        ? icon.url
                        : `https://${icon.url}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline flex items-center gap-1"
                  >
                    <span>{icon.url}</span>
                    <ExternalLink className="text-gray-500 w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Code section */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-900">
                    Usage Guide
                  </h3>
                  <p className="text-sm text-slate-400">
                    Copy and paste the following code into your HTML or JSX to
                    use this icon:
                  </p>
                </div>
                <div className="space-y-4">
                  {icon.classes.map((iconClass) => (
                    <div
                      key={iconClass}
                      className={`bg-gray-300 px-2 rounded-xl flex items-center gap-4 shadow-xs h-20`}
                    >
                      <i
                        className={`ci ci-${iconClass} ci-${size(
                          icon
                        )}x mx-3 py-auto cursor-pointer transition-all duration-200`}
                        onMouseEnter={() => setZoomedIcon(iconClass)}
                        onMouseLeave={() => setZoomedIcon(null)}
                      />
                      <div className="flex-1">
                        <IconCode iconClass={iconClass} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>

        {/* Zoomed icon overlay - PRESERVED FUNCTIONALITY */}
        {zoomedIcon && (
          <div className="fixed inset-0 flex items-center justify-center z-50 transition-all pointer-events-none">
            <div className="p-8 bg-gray-300 rounded-xl shadow-xl sm:scale-150 scale-125 transition-transform">
              <i className={`ci ci-${zoomedIcon} ci-6x text-gray-800`} />
            </div>
          </div>
        )}
      </Dialog>
    </>
  );
};

export default Modal;
