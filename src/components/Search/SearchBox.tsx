"use client";
import { Input } from "@/components/ui/input";
import { SearchContext } from "@/context/SearchContextProvider";
import { useContext, useRef } from "react";
import { Search } from "lucide-react";
import { ClearButton } from ".";
import useSearchShortcuts from "@/hooks/useSearchShortcuts";

function SearchBox() {
  const ref = useRef<HTMLInputElement>(null);

  const { search, setSearch, focusTrigger } = useContext(SearchContext);
  useSearchShortcuts(ref, focusTrigger);

  const handleClearSearch = () => {
    setSearch("");
    ref.current?.focus();
  };

  return (
    <div className="relative animate-in fade-in slide-in-from-bottom-1">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search"
        type="search"
        className="pl-8 focus-visible:ring-purple-700 focus-visible:border-gray-200 transition-shadow"
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
