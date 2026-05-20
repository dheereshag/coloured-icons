"use client"

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Icon } from "@/interfaces";
import { useState } from "react";
import { IconHeader, ModalTopBar, UsageList, ZoomOverlay } from ".";

interface ModalProps {
  icon: Icon;
  trigger: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ icon, trigger }) => {
  const [zoomedIcon, setZoomedIcon] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max-w-2xl w-full rounded-2xl bg-white shadow-[0_0_50px_-12px] shadow-purple-500/10 border border-slate-200 max-h-[90vh] overflow-hidden flex flex-col p-0 gap-0"
      >
        <ModalTopBar onClose={() => setOpen(false)} />

        <div className="mx-6 sm:mx-8 mb-8 flex min-h-0 flex-col">
          {/* Icon preview (static header area) */}
          <IconHeader icon={icon} />

          {/* Usage header */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-900">
              Usage Guide
            </h3>
            <p className="text-sm text-slate-400">
              Copy and paste the following code into your HTML or JSX to use
              this icon:
            </p>
          </div>

          {/* Divider above scroll area */}
          <hr className="my-4 border-slate-200" />

          {/* Scrollable list area */}
          <div className="flex-1 overflow-y-auto pr-1 sm:pr-2">
            <UsageList icon={icon} onHover={(cls) => setZoomedIcon(cls)} />
            {/* bottom spacer to avoid last item hugging the edge */}
            <div className="h-2" />
          </div>
        </div>

        {/* Zoomed icon overlay - PRESERVED FUNCTIONALITY */}
        <ZoomOverlay zoomedIcon={zoomedIcon} />
      </DialogContent>
    </Dialog>
  );
};
