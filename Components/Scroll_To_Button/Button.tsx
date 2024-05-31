"use client";

import { useRef } from "react";

type obj = {
  btnName: string;
  func: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ obj }: { obj: obj }) => {
  const { btnName, func } = obj;

  return (
    <>
      <button type="submit" className="btn" onClick={func}>
        {btnName}
      </button>
    </>
  );
};

export default Button;
