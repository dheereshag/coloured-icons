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

interface CdnIncludeProps {
  text: string;
  url: string;
}

export const CdnInclude: React.FC<CdnIncludeProps> = ({ text, url }) => {
  const link = `<link rel="stylesheet" href="${url}" />`;

  return (
    <>
      <p className="text-gray-600 my-4">{text}</p>
      <Snippet value="cdn">
        <SnippetHeader>
          <SnippetTabsList>
            <SnippetTabsTrigger value="cdn">
              <LinkIcon size={14} />
              <span>CDN Link</span>
            </SnippetTabsTrigger>
          </SnippetTabsList>
          <SnippetCopyButton value={link} className="cursor-pointer" />
        </SnippetHeader>
        <SnippetTabsContent value="cdn">{link}</SnippetTabsContent>
      </Snippet>
    </>
  );
};
