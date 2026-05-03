"use client";

import { useState } from "react";
import { Input } from "@heroui/react";
import TilesCard from "@/components/shared/TilesCard";

export default function AllTilesClient({ data }) {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTiles = data.filter((tile) =>
    tile.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setSearchTerm(query);
  };

  return (
    <>
      <div className="max-w-380 mx-auto flex gap-3 justify-end mb-12">
        
        <Input
          size="lg"
          placeholder="Search tiles by title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-white/20 backdrop-blur-xl border border-white/30 text-white placeholder-white/70"
        />

        <button
          onClick={handleSearch}
          className="px-6 py-2 cursor-pointer rounded-lg bg-white/20 backdrop-blur-xl border border-white/30 text-gray-200 hover:bg-blue-400 hover:text-white transition-all " >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredTiles.length > 0 ? (
          filteredTiles.map((tile) => (
            <TilesCard key={tile.id} tile={tile} />
          ))
        ) : (
          <p className="text-center text-white col-span-full">
            No tiles found.
          </p>
        )}
      </div>
    </>
  );
}