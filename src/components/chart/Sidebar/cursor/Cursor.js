import React, { useState } from "react";
import { ArrowIcon, CrossIcon, DotIcon, EraserIcon } from "./icons";

const Cursor = () => {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(<CrossIcon />);
  const [option, setOption] = useState("Cross");
  // Main value
  const [value, setValue] = useState(1);
  // console.log(value);

  const isClick = (Icon, option, val) => {
    setOpen(!open);
    setIcon(Icon);
    setOption(option);
    setValue(val);
  };

  const items = [
    { Component: <CrossIcon />, option: "Cross", value: 1 },
    { Component: <DotIcon />, option: "Dot", value: 2 },
    { Component: <ArrowIcon />, option: "Arrow", value: 3 },
    { Component: <EraserIcon />, option: "Eraser", value: 4 },
  ];

  console.log(value);

  return (
    <div
      aria-label="Cross bar"
      className="flex justify-center items-center group mt-1 "
    >
      <button
        className="hover:bg-lightGray p-1 rounded-md group tooltip tooltip-right text-black  focus-within:text-[#2962ff] cursor-default"
        data-tip={option}
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
                option === item.option
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : ""
              } `}
              key={index}
              onClick={() => {
                isClick(item.Component, item.option, item.value);
              }}
            >
              {item.Component}
              <span className="ml-1">{item.option}</span>
            </p>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Cursor;
