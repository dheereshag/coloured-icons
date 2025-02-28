import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Icon } from "@/interfaces";
import { IconCode } from ".";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

interface ModalProps {
  icon: Icon;
  onClose: () => void;
}

const size = (iconClass: string) => {
  // returns iconSize
  switch (true) {
    case iconClass.includes("horizontal"):
    case iconClass.includes("wordmark"):
      return 5;
    case iconClass.includes("vertical"):
      return 4;
    default:
      return 2;
  }
};

const Modal: React.FC<ModalProps> = ({ icon, onClose }) => {
  const [zoomedIcon, setZoomedIcon] = useState<string | null>(null);

  return (
    <Dialog open={true} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-2xl w-full rounded-2xl bg-white shadow-[0_0_50px_-12px] shadow-purple-500/10 border border-slate-200 max-h-[90vh] overflow-y-auto">
        <div className="px-6 sm:px-8 pb-8">
          {/* Icon preview */}
          <div className="flex items-center gap-8 mb-10">
            <div className="p-8 bg-linear-to-b from-slate-100 to-white rounded-2xl shadow-xs border border-slate-200">
              <i className={`ci ci-${icon.classes[0]} ci-4x text-slate-700`} />
            </div>
            <div className="flex flex-col">
              <DialogTitle className="text-2xl font-semibold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {icon.name}
              </DialogTitle>
              <Link
                href={
                  icon.url.startsWith("http") ? icon.url : `https://${icon.url}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline flex items-center"
              >
                {icon.url}
                <HiOutlineExternalLink className="ml-1 text-gray-500 text-sm inline-block" />
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
                Copy and paste the following code into your HTML or JSX to use
                this icon:
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
                      iconClass
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
      </DialogContent>

      {/* Zoomed icon overlay */}
      {zoomedIcon && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-100 transition-all">
          <div className="p-8 bg-gray-300 rounded-xl shadow-xl sm:scale-2 scale-125">
            <i className={`ci ci-${zoomedIcon} ci-4x text-gray-800`} />
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default Modal;
