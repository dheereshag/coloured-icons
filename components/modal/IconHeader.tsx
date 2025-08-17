import { DialogTitle } from "@headlessui/react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Icon } from "@/interfaces";
import { ensureProtocol } from "@/lib/utils";

interface IconHeaderProps {
  icon: Icon;
}

const IconHeader: React.FC<IconHeaderProps> = ({ icon }) => {
  return (
    <div className="flex items-center gap-8 mb-10">
      <div className="p-8 bg-linear-to-b from-slate-100 to-white rounded-2xl shadow-xs border border-slate-200">
        <i className={`ci ci-${icon.classes[0]} ci-4x text-slate-700`} />
      </div>
      <div className="flex flex-col">
        <DialogTitle className="text-2xl font-semibold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {icon.name}
        </DialogTitle>
        <Link
          href={ensureProtocol(icon.url)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:underline flex items-center gap-1"
        >
          <span>{icon.url}</span>
          <ExternalLink className="text-gray-500 w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

export default IconHeader;
