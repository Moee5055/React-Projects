"use client";

import { useQRCode } from "next-qrcode";
import { FormEvent, useState } from "react";

const QrGenerator = () => {
  const { Canvas } = useQRCode();
  const [input, setInput] = useState("");
  const [generateQR, setGenerateQR] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setGenerateQR(input);
  };
  console.log(input);

  return (
    <div className="flex flex-col justify-center items-center space-y-5 mt-[3rem]">
      <h2>QR Code Generator</h2>
      <form onSubmit={handleSubmit} className="space-x-3 ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-2 border-gray-400"
        />
        <button
          type="submit"
          disabled={input.length == 0}
          className="disabled:opacity-50 disabled:text-slate-400">
          Generate
        </button>
      </form>
      {generateQR && (
        <Canvas
          text={generateQR}
          options={{
            errorCorrectionLevel: "M",
            margin: 3,
            scale: 4,
            width: 200,
          }}
        />
      )}
    </div>
  );
};

export default QrGenerator;
