"use client";

import { Products } from "@/lib/schema";
import Image from "next/image";
import { getData } from "@/lib/dataFetch";
import { useEffect, useState, useRef } from "react";

const ProductsList = ({ products }: { products: Products[] }) => {
  const [count, setCount] = useState(0);
  const isMounted = useRef(false);
  const productsUrl = `https://dummyjson.com/products?limit=20&skip=${
    count * 20
  }&select=title,price,thumbnail`;
  const [items, setItems] = useState<Products[]>([]);
  const [disabled, setDisabled] = useState(false);

  const showMoreProducts = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (isMounted.current) {
      const fetchData = async () => {
        try {
          const { products } = await getData(productsUrl);
          if (products.length === 0) {
            setDisabled(true);
          } else {
            setItems([...items, ...products]);
          }
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    } else {
      isMounted.current = true;
    }
  }, [count]);

  return (
    <div className="w-[90vw] mx-auto max-w-[1200px] py-3 space-y-4">
      <h2 className="text-3xl text-center font-bold tracking-[2px]">
        Products
      </h2>
      <div className="grid grid-cols-3 gap-7">
        {(isMounted.current ? items : products).map(
          (singleProduct: Products) => {
            const { id, title, thumbnail, price } = singleProduct;
            return (
              <section key={id} className="shadow-lg space-y-2 pb-3">
                <figure>
                  <Image
                    src={thumbnail}
                    alt={title}
                    priority
                    width={500}
                    height={500}
                  />
                </figure>
                <div className="px-4">
                  <p>{price}</p>
                  <p>{title}</p>
                </div>
              </section>
            );
          }
        )}
      </div>
      {disabled ? (
        <p className="text-center">No More Data...</p>
      ) : (
        <button
          type="button"
          className={`block mx-auto py-3 px-4 hover:bg-sky-400 hover:text-white`}
          onClick={showMoreProducts}>
          Load More
        </button>
      )}
    </div>
  );
};

export default ProductsList;
