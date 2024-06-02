"use client";

import { SearchContext } from "@/app/Context";
import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DisplayItems = () => {
  const { items } = useContext(SearchContext);
  const router = useRouter();

  const handleOnClick = (id: number) => {
    router.push(`/${id}`);
  };

  if (!items) {
    return <h2>No data</h2>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.length > 0 ? (
        items?.map((singleItem: any) => {
          const { publisher, image_url, title, id } = singleItem;
          return (
            <section key={id} className="shadow-lg p-4 rounded-lg">
              <figure className="h-[300px] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={image_url}
                  alt={title}
                  width={500}
                  height={500}
                  priority
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="text-center">
                <span className="block text-sm font-semibold mb-2">
                  {publisher}
                </span>
                <h2 className="text-lg font-bold mb-4">{title}</h2>
                <button
                  type="button"
                  onClick={() => handleOnClick(id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Recipe Details
                </button>
              </div>
            </section>
          );
        })
      ) : (
        <div>No Data to display</div>
      )}
    </div>
  );
};

export default DisplayItems;
