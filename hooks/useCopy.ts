import { useEffect, useRef, useState } from "react";

/**
 * Copy-to-clipboard hook with SSR-safety and error handling.
 */
const useCopy = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async (text: string) => {
    // SSR/unsupported environments
    if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
      try {
        // Fallback for very old browsers
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        const selection = document.getSelection();
        const selected = selection
          ? selection.rangeCount > 0
            ? selection.getRangeAt(0)
            : null
          : null;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        if (selected && selection) {
          selection.removeAllRanges();
          selection.addRange(selected);
        }
        setCopied(true);
      } catch (e) {
        console.error("Clipboard copy is not supported:", e);
        return;
      }
    } else {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
      } catch (err) {
        console.error("Failed to copy to clipboard:", err);
        return;
      }
    }

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return { copied, handleCopy };
};

export default useCopy;
