"use client";

import { SearchContext } from "@/app/Context";
import Link from "next/link";
import { FormEvent, useContext } from "react";

const Navbar = () => {
  const { search, setSearch, fetchData, setItems } = useContext(SearchContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetchData();
    if (response) {
      setItems(response);
    }
  };

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center py-3 px-4">
        <div>
          <h1 className="font-bold tracking-wider text-xl">FoodRecipe</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Items..."
              className="shadow-lg py-2 px-4 rounded-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/favorites">Favourites</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
