import { Clipboard, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import useCopy from "@/hooks/useCopy";

interface IconCodeProps {
  iconClass: string;
}

export const IconCode: React.FC<IconCodeProps> = ({ iconClass }) => {
  const { copied, handleCopy } = useCopy();
  const snippet = `<i class="ci ci-${iconClass}"></i>`;

  return (
    <div className="flex items-center group">
      <pre className="flex-1 text-xs sm:text-sm whitespace-pre-wrap">
        <code className="font-mono">{snippet}</code>
      </pre>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleCopy(snippet)}
        className="m-2 hover:bg-slate-200/60 transition-all h-auto p-2 cursor-pointer"
        title="Copy to clipboard"
      >
        {copied ? (
          <ClipboardCheck className="w-5 h-5 text-green-600" />
        ) : (
          <Clipboard className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
        )}
      </Button>
    </div>
  );
};
