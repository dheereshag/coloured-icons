import { Dialog, DialogPanel } from "@headlessui/react";
import { Icon } from "@/interfaces";
import { useState } from "react";
import ModalTopBar from "./ModalTopBar";
import IconHeader from "./IconHeader";
import UsageList from "./UsageList";
import ZoomOverlay from "./ZoomOverlay";

interface ModalProps {
  icon: Icon;
  onClose: () => void;
}

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
            <ModalTopBar onClose={onClose} />

            <div className="mx-6 sm:mx-8 mb-8">
              {/* Icon preview */}
              <IconHeader icon={icon} />

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
                <UsageList icon={icon} onHover={(cls) => setZoomedIcon(cls)} />
              </div>
            </div>
          </DialogPanel>
        </div>

        {/* Zoomed icon overlay - PRESERVED FUNCTIONALITY */}
        <ZoomOverlay zoomedIcon={zoomedIcon} />
      </Dialog>
    </>
  );
};

export default Modal;
