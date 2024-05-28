"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRatingComponnet = ({ totalStars = 5 }: { totalStars: number }) => {
  const [selected, setSelected] = useState<number>(0);
  const [hoverSelect, setHoverSelected] = useState<number>(0);

  const handleClick = (num: number) => {
    setSelected(num);
  };

  const handleMoveIn = (index: number) => {
    setHoverSelected(index);
  };

  const handleMoveOut = () => {
    setHoverSelected(selected);
  };

  return (
    <div className="flex justify-center mt-10 space-x-3">
      {[...Array(totalStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            size={40}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMoveIn(index)}
            onMouseLeave={handleMoveOut}
            className={
              index <= (hoverSelect || selected)
                ? "text-yellow-400"
                : "text-black"
            }
          />
        );
      })}
    </div>
  );
};

export default StarRatingComponnet;
