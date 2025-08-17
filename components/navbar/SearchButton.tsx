"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search } from "lucide-react";

interface SearchButtonProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="transition-transform hover:scale-110 active:scale-95"
    >
      <Link href="/" onClick={onClick}>
        <Search className="size-5" />
        <span className="sr-only">Search</span>
      </Link>
    </Button>
  );
};
