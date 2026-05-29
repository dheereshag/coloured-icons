"use client"

import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Icon } from "@/interfaces";
import { useState } from "react";
import { IconHeader, UsageList, ZoomOverlay } from ".";
import { UsageGuideHeader } from "./UsageGuideHeader";

interface ModalProps {
  icon: Icon;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({ icon, open, onOpenChange }) => {
  const [zoomedIcon, setZoomedIcon] = useState<string | null>(null);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-w-2xl w-full rounded-2xl bg-white shadow-[0_0_50px_-12px] shadow-purple-500/10 border border-slate-200 max-h-[90vh] overflow-hidden flex flex-col p-0 gap-0"
      >
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl py-4 px-8">
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100/80 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </div>

        <div className="mx-6 sm:mx-8 mb-8 flex min-h-0 flex-col">
          {/* Icon preview (static header area) */}
          <IconHeader icon={icon} />

          {/* Usage header */}
          <UsageGuideHeader />

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
