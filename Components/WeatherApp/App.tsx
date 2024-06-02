"use client";

import { useState } from "react";
import Display_Data from "./Data_Component/Display_Data";
import Header from "./Header_Component/Header";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/lib/dataFetch";

export const App = () => {
  const [search, setSearch] = useState("");
  const w_url = `https://api.openweathermap.org/data/2.5/weather?lq=${search}&appid=a2a7b8963db905572d285f9984151fdc }`;

  // const { data } = useQuery({
  //   queryKey: ["weather_Data", search],
  //   queryFn: async function fetchData() {
  //     const response = await getData(w_url);
  //   },
  // });

  return (
    <div className="p-5 rounded-lg bg-cyan-500/80 max-w-xl h-[400px] mx-auto mt-[5rem] space-y-4">
      <header className="flex items-center justify-center">
        <Header setSearch={setSearch} />
      </header>
      <div className="w-full">
        <Display_Data />
      </div>
    </div>
  );
};
