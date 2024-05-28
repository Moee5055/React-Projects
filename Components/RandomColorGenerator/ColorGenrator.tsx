"use client";
import { useState } from "react";
import { HexValue, randomValueGenerator } from "./data";

const ColorGenerator = () => {
  const [colorCode, setColorCode] = useState("");
  const [value, setValue] = useState<"hex" | "rgb">("hex");

  const setColor = (color: string, type: "hex" | "rgb") => {
    setColorCode(color);
    setValue(type);
    document.body.style.backgroundColor = color;
  };

  const hexColorGenerator = () => {
    let value: number | string = "#";

    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * HexValue.length);
      value += HexValue[index];
    }
    setColor(value, "hex");
  };

  const rgbColorGenerator = () => {
    const [a, b, c] = randomValueGenerator();
    setColor(`rgb(${a}, ${b}, ${c})`, "rgb");
  };

  const randomColorGenerator = () => {
    value === "hex" ? hexColorGenerator() : rgbColorGenerator();
  };

  return (
    <div className="mt-[3rem]">
      <div className="space-x-4 flex justify-center items-center">
        <button type="button" className="btn" onClick={hexColorGenerator}>
          Create Hex Color
        </button>
        <button type="button" className="btn" onClick={rgbColorGenerator}>
          Create RGB Color
        </button>
        <button type="button" className="btn" onClick={randomColorGenerator}>
          Create Random Color
        </button>
      </div>
      <section className="flex h-[80vh] justify-center items-center">
        <h1 className="font-bold tracking-[1px] text-3xl ">
          {value === "hex" ? "HexColorCode" : "Rgb Value"}: {colorCode}
        </h1>
      </section>
    </div>
  );
};

export default ColorGenerator;
