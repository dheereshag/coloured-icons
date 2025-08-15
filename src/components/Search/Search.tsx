"use client";
import { Input } from "@/components/ui/input";
import { SearchContext } from "@/context/SearchContextProvider";
import { useContext, useEffect, useRef, useCallback } from "react";
import { Search } from "lucide-react";
import { ClearButton } from ".";

const useSearchShortcuts = (
  ref: React.RefObject<HTMLInputElement | null>,
  focusTrigger: number
) => {
  useEffect(() => {
    if (focusTrigger) {
      ref.current?.focus();
    }
  }, [focusTrigger]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        ref.current?.focus();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [ref]);
};

function SearchBox() {
  const ref = useRef<HTMLInputElement>(null);

  const { search, setSearch, focusTrigger } = useContext(SearchContext);
  useSearchShortcuts(ref, focusTrigger);

  const handleClearSearch = useCallback(() => {
    setSearch("");
    ref.current?.focus();
  }, [setSearch]);

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search"
        type="search"
        className="pl-8 focus-visible:ring-purple-700 focus-visible:border-gray-200"
        ref={ref}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search icons"
      />
      {search && <ClearButton onClick={handleClearSearch} />}
    </div>
  );
}

export default SearchBox;
