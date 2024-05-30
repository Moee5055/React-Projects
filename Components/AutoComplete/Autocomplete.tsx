"use client";
import axios from "axios";
import Search from "./Search";

const Autocomplete = () => {
  return (
    <main className="grid place-items-center py-[3rem]">
      <Search />
    </main>
  );
};

export default Autocomplete;
