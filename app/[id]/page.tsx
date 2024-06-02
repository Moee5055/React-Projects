"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Item, SearchContext } from "../Context";

const SingleItem = ({ params: { id } }: { params: { id: string } }) => {
  const { fetchData, setFavItems } = useContext(SearchContext);
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    async function getData() {
      const res = await fetchData();
      if (Array.isArray(res)) {
        const foundItem = res.find((i: Item) => i.id === id);
        setItem(foundItem || null);
      }
    }
    getData();
  }, [id, fetchData]);

  const handleFavourite = () => {
    if (item) {
      setFavItems(item);
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <figure>
        <Image src={item.image_url} alt={item.title} width={500} height={500} />
      </figure>
      <div key={item.id}>
        <span>{item.publisher}</span>
        <h2>{item.title}</h2>
        <button type="button" onClick={handleFavourite}>
          Add to favourites
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
