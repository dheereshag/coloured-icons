"use client";
import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@/components/ui/kibo-ui/snippet";
import { LinkIcon } from "lucide-react";
import { useState } from "react";

interface CdnIncludeProps {
  text: string;
  url: string;
}

export const CdnInclude: React.FC<CdnIncludeProps> = ({ text, url }) => {
  const link = `<link rel="stylesheet" href="${url}" />`;
  const [value, setValue] = useState("cdn");

  return (
    <>
      <p className="text-gray-600 my-4">{text}</p>
      <Snippet onValueChange={setValue} value={value}>
        <SnippetHeader>
          <SnippetTabsList>
            <SnippetTabsTrigger value="cdn">
              <LinkIcon size={14} />
              <span>CDN Link</span>
            </SnippetTabsTrigger>
          </SnippetTabsList>
          <SnippetCopyButton
            onCopy={() => console.log(`Copied "${link}" to clipboard`)}
            onError={() =>
              console.error(`Failed to copy "${link}" to clipboard`)
            }
            value={link}
            className="cursor-pointer"
          />
        </SnippetHeader>
        <SnippetTabsContent value="cdn">{link}</SnippetTabsContent>
      </Snippet>
    </>
  );
};
