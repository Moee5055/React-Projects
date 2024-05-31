"use client";
import { useRef } from "react";
import { container } from "./data";

const Index = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const home = useRef<HTMLDivElement | null>(null);
  const about = useRef<HTMLDivElement | null>(null);

  //   const handleGotoContainer = () => {
  //     // let pos = containerRef.current?.getBoundingClientRect().top;
  //     // pos -= 10;
  //     // console.log(pos);

  //     // window.scroll({
  //     //   top: pos,
  //     //   behavior: "smooth",
  //     // });
  //     containerRef.current?.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   };

  const handleGotoContainer = (value: string) => {
    if (value == "home") {
      home.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (value == "about") {
      about.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-6 py-[4rem] text-center">
      <button type="submit" onClick={() => handleGotoContainer("home")}>
        Home
      </button>
      <button type="submit" onClick={() => handleGotoContainer("about")}>
        About
      </button>
      <p>click button to go to that container</p>
      {/* <button className="border" onClick={handleGotoContainer}>
        click here
      </button> */}
      {container?.map((container, i) => {
        const { label, height, width, style } = container;
        return (
          <div
            key={i}
            style={{
              height: `${height}`,
              width: `${width}`,
              background: `${style}`,
            }}
            className="text-center text-white"
            // ref={i === 2 ? containerRef : null}
          >
            {label}
          </div>
        );
      })}

      <div className="w-full h-[80vh] bg-slate-600 text-center" ref={home}>
        Home
      </div>
      <div className="w-full h-[80vh] bg-slate-400 text-center" ref={about}>
        aBout
      </div>
    </div>
  );
};

export default Index;
