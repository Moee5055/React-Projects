"use client";
import { ImageData } from "@/lib/dataFetch";
import {
  Bs0CircleFill,
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsCCircleFill,
  BsCircle,
} from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";

const ImageSlider = ({ data }: { data: ImageData[] }) => {
  const [selectedId, setSelectedId] = useState(0);

  const handleRightClick = () => {
    setSelectedId(selectedId >= data.length - 1 ? 0 : (prev) => prev + 1);
  };

  const handleLeftClick = () => {
    setSelectedId(selectedId == 0 ? data.length - 1 : (prev) => prev - 1);
  };

  const handlebuttonClicked = (index: number) => {
    setSelectedId(index);
  };

  return (
    <div className="h-screen grid place-items-center">
      <div className="relative">
        <BsArrowLeftCircleFill
          className="arrowBtn leftArrowBtn"
          onClick={handleLeftClick}
        />
        <figure className="flex">
          {data.map((singleData: ImageData) => {
            const { id, download_url } = singleData;
            return (
              <Image
                key={id}
                src={download_url}
                alt={`${id}`}
                height={500}
                width={500}
                priority
                className={`${
                  selectedId == id ? "block w-auto h-auto" : "hidden"
                }`}
              />
            );
          })}
        </figure>
        <BsArrowRightCircleFill
          className="arrowBtn rightArrowBtn"
          onClick={handleRightClick}
        />
        <div className="absolute flex bottom-5 left-0 right-0 justify-center space-x-2 text-white">
          {data.map((_, index) => {
            return (
              <button
                key={index}
                className={`${
                  index === selectedId ? "bg-gray-500" : "bg-white"
                } circleBtn`}
                onClick={() => handlebuttonClicked(index)}></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
