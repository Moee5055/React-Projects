"use client";

import { useRef, useEffect } from "react";
import Button from "./Button";

const DisplayList = ({ data }: { data: any }) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // Instant scroll to top when component mounts
    });
  }, []);

  function goToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleGoToBottom() {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  if (typeof data === "undefined") {
    return <h2>Error Finding Data</h2>;
  }

  if (data.length === 0) {
    return <h2>No data to display</h2>;
  }

  return (
    <>
      <Button obj={{ btnName: "Scroll to Bottom", func: handleGoToBottom }} />
      <div>
        {data?.map((singleProducts: any) => {
          const { id, title } = singleProducts;
          return <p key={id}>{title}</p>;
        })}
        <div ref={bottomRef}></div>
      </div>
      <Button obj={{ btnName: "Scroll to top", func: goToTop }} />
    </>
  );
};

export default DisplayList;
