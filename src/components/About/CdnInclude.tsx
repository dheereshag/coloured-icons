import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";
interface CdnIncludeProps {
  text: string;
  url: string;
}

const CdnInclude: React.FC<CdnIncludeProps> = ({ text, url }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <p className="text-gray-600 mt-4">{text}</p>
      <div className="mt-4 relative">
        <pre className="bg-gray-800/95 text-white p-4 rounded-lg whitespace-pre-wrap word-break-all">
          <code>{`<link rel="stylesheet" href="${url}" />`}</code>
        </pre>
        <button
          onClick={() => handleCopy(`<link rel="stylesheet" href="${url}" />`)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-white/10 transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <ClipboardCheck className="w-5 h-5 text-green-400" />
          ) : (
            <Clipboard className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>
    </>
  );
};

export default CdnInclude;
