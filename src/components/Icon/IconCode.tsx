import { Clipboard, ClipboardCheck } from "lucide-react";
import useCopy from "@/hooks/useCopy";
import { rubik } from "@/lib/fonts";

interface IconCodeProps {
  iconClass: string;
}

const IconCode: React.FC<IconCodeProps> = ({ iconClass }) => {
  const { copied, handleCopy } = useCopy();

  return (
    <div className="flex items-center group">
      <pre className="flex-1 text-xs sm:text-sm whitespace-pre-wrap">
        <code
          className={rubik.className}
        >{`<i class="ci ci-${iconClass}"></i>`}</code>
      </pre>

      <button
        onClick={() => handleCopy(`<i class="ci ci-${iconClass}"></i>`)}
        className="m-2 hover:bg-gray-300/50 transition-all"
        title="Copy to clipboard"
      >
        {copied ? (
          <ClipboardCheck className="w-5 h-5 text-green-600" />
        ) : (
          <Clipboard className="w-5 h-5 text-gray-600 group-hover:text-gray-700" />
        )}
      </button>
    </div>
  );
};

export default IconCode;
