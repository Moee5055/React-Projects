"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type Menus = {
  label: string;
  to: string;
  children?: Menus[];
};

const ChildrenComponent = ({ data }: { data: Menus[] | undefined }) => {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label)
        ? prev.filter((name) => name !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      {data?.map((item: Menus) => (
        <div key={item.to}>
          <div
            onClick={() => toggleMenu(item.label)}
            className="flex justify-between items-center cursor-pointer mt-2">
            <p className="text-xl tracking-wider">{item.label}</p>
            {item.children ? (
              openMenus.includes(item.label) ? (
                <FaMinus />
              ) : (
                <FaPlus />
              )
            ) : null}
          </div>
          {openMenus.includes(item.label) && item.children && (
            <div className="ml-4">
              <ChildrenComponent data={item.children} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

const NavComponent = ({ menus }: { menus: Menus[] }) => {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label)
        ? prev.filter((name) => name !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="max-w-[300px] text-white bg-cyan-700 h-screen p-5 space-y-3">
      {menus.map((item: Menus) => (
        <div key={item.to}>
          <div
            onClick={() => toggleMenu(item.label)}
            className="flex justify-between items-center cursor-pointer">
            <p className="text-xl tracking-wider">{item.label}</p>
            {item.children ? (
              openMenus.includes(item.label) ? (
                <FaMinus />
              ) : (
                <FaPlus />
              )
            ) : null}
          </div>
          {openMenus.includes(item.label) && item.children && (
            <div className="ml-4">
              <ChildrenComponent data={item.children} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavComponent;
