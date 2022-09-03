import React, { useState } from "react";
import { ArrowIcon, CrossIcon, DotIcon, EraserIcon } from "./icons";

const Cursor = () => {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(<CrossIcon />);
  // Main value
  const [value, setValue] = useState("Cross");
  // console.log(value);

  const isClick = (Icon, val) => {
    setOpen(!open);
    setValue(val);
    setIcon(Icon);
  };

  const items = [
    { Component: <CrossIcon />, value: "Cross" },
    { Component: <DotIcon />, value: "Dot" },
    { Component: <ArrowIcon />, value: "Arrow" },
    { Component: <EraserIcon />, value: "Eraser" },
  ];

  return (
    <div
      aria-label="Cross bar"
      className="flex justify-center items-center group mt-1 "
    >
      <button
        className="hover:bg-lightGray p-1 rounded-md group tooltip tooltip-right text-black  focus-within:text-[#2962ff] cursor-default"
        data-tip={value}
        onClick={() => {
          setOpen(true);
        }}
      >
        {icon}
      </button>

      <ul
        className={`absolute  z-40 w-[100vw] h-[100vh] left-0 top-0  bg-transparent 
        ${!open ? "hidden" : "block"}`}
        onClick={() => {
          setOpen(false);
        }}
      >
        <div
          className="relative shadow-2xl bg-white w-52 py-2 overflow-scroll top-[70px] left-[52px] rounded-md"
          id="select"
        >
          {items.map((item, index) => (
            <p
              className={`px-3 py-2 cursor-pointer hover:bg-lightGray font-normal  text-sm text-left ${
                value === item.value
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : ""
              } `}
              key={index}
              onClick={() => {
                isClick(item.Component, item.value);
              }}
            >
              {item.Component}
              <span className="ml-1">{item.value}</span>
            </p>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Cursor;
