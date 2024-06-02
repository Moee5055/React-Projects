"use client";

import React, { useContext } from "react";
import { SearchContext } from "@/app/Context";

const FavouritePage = () => {
  const { favItems } = useContext(SearchContext);

  return (
    <div>
      {favItems?.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
};

export default FavouritePage;
