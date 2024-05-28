"use client";

import { useState } from "react";
import { data } from "./data";

const AccordionComponent = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [multiSelection, setMultiSelection] = useState(false);

  const handleId = (index: number) => {
    if (multiSelection) {
      if (!selectedIds.includes(index)) {
        setSelectedIds([...selectedIds, index]);
      } else {
        setSelectedIds(selectedIds.filter((id) => id !== index));
      }
    } else {
      setSelectedIds(selectedIds.includes(index) ? [] : [index]);
    }
  };

  const handleMultiSelection = () => {
    setMultiSelection(!multiSelection);
    if (!multiSelection) {
      setSelectedIds([]);
    }
  };

  return (
    <main className="h-screen flex justify-center items-center w-[90vw] mx-auto">
      <div className="space-y-6">
        <div className="flex justify-center">
          <button
            className="py-2 px-4 bg-amber-900/90 text-white font-bold"
            type="button"
            onClick={handleMultiSelection}>
            {multiSelection
              ? "Disable Multi Selection"
              : "Enable Multi Selection"}
          </button>
        </div>
        <section className="space-y-5 text-white text-lg font-medium">
          {data.map((singleData, index) => {
            const { title, content } = singleData;
            return (
              <article
                key={index}
                className="py-2 px-3 flex cursor-pointer w-[400px] justify-between bg-amber-900"
                onClick={() => handleId(index)}>
                <div>
                  <h2>{title}</h2>
                  {selectedIds.includes(index) && <p>{content}</p>}
                </div>
                <span>{selectedIds.includes(index) ? "-" : "+"}</span>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default AccordionComponent;
