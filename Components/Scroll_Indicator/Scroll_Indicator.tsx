"use client";
import { getData } from "@/lib/dataFetch";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const url = `https://www.themealdb.com/api/json/v1/1/search.php?s`;

const Scroll_Indicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { data, isFetching, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => getData(url),
  });

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isFetching) {
    return <h2>Data Fetching...</h2>;
  }

  if (isError) {
    return <h2>Error fetching Data</h2>;
  }

  const meals = data?.meals || [];

  return (
    <main className="space-y-5">
      <div className="w-full h-3 bg-slate-600 fixed top-0">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${scrollProgress}%` }}></div>
      </div>
      <div className="grid place-items-center">
        {meals.map((singleProduct: any) => {
          const { idMeal, strMeal } = singleProduct;
          return <p key={idMeal}>{strMeal}</p>;
        })}
      </div>
    </main>
  );
};

export default Scroll_Indicator;
