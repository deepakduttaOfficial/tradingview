import React, { useState } from "react";
import {
  AreaIcon,
  BarsIcon,
  BaselineIcon,
  CandlesIcon,
  ColumnIcon,
  HighLowIcon,
  HollowIcon,
  LineIcon,
} from "./Icons";

const Candles = () => {
  const [open, setOpen] = useState(false);
  const [Icon, setIcon] = useState(<BarsIcon />);
  const [option, setOption] = useState("Bar");
  // Main value
  const [value, setValue] = useState(1);
  // console.log(value);

  const isClick = (Icon, option, val) => {
    setOpen(!open);
    setValue(val);
    setIcon(Icon);
    setOption(option);
  };

  console.log(value);

  const candles = [
    { Component: <BarsIcon />, option: "Bar", value: 1 },
    { Component: <CandlesIcon />, option: "Candles", value: 2 },
    { Component: <HollowIcon />, option: "Hollow Candles", value: 3 },
    { Component: <ColumnIcon />, option: "Columns", value: 4 },
    { Component: <LineIcon />, option: "Line", value: 5 },
    { Component: <AreaIcon />, option: "Area", value: 6 },
    { Component: <BaselineIcon />, option: "Baseline", value: 7 },
    { Component: <HighLowIcon />, option: "High-low", value: 8 },
  ];

  return (
    <div
      aria-label="Bars"
      className="tooltip tooltip-bottom "
      data-tip={option}
    >
      <button
        className="py-[5px] px-2 hover:bg-lightGray rounded-md"
        onClick={() => {
          setOpen(true);
        }}
      >
        {Icon}
      </button>

      <ul
        className={`absolute top-10 -left-9 z-40 w-52 bg-[#fff] shadow-minShadow py-2 
        ${
          !open ? "hidden" : "block"
        } shadow-2xl  overflow-scroll border border-gray rounded-md `}
        id="select"
      >
        <div>
          {candles.map((candle, index) => (
            <p
              className={`px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-sm text-left ${
                option === candle.option
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : ""
              }`}
              onClick={() => {
                isClick(candle.Component, candle.option, candle.value);
              }}
              key={index}
            >
              {candle.Component}
              <span className="ml-2">{candle.option}</span>
            </p>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Candles;
