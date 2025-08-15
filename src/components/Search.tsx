"use client";
import { Input } from "@/components/ui/input";
import { SearchContext } from "@/context/SearchContextProvider";
import { useContext, useEffect, useRef, useCallback } from "react";
import { X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

function SearchBox() {
  const ref = useRef<HTMLInputElement>(null);

  const { search, setSearch, focusTrigger } = useContext(SearchContext);

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
  }, []);

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
      {search && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 h-8 w-8 -translate-y-1/2 hover:bg-transparent"
          onClick={handleClearSearch}
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

export default SearchBox;
