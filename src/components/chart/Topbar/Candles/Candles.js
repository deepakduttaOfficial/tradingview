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
  const [icon, setIcon] = useState(<BarsIcon />);
  const [value, setValue] = useState("Bars");

  const isClick = (Icon, tol) => {
    setOpen(!open);
    setValue(tol);
    setIcon(Icon);
  };
  return (
    <div aria-label="Bars" className="tooltip tooltip-bottom " data-tip={value}>
      <button
        className="py-[5px] px-2 hover:bg-lightGray rounded-md"
        onClick={() => {
          setOpen(true);
        }}
      >
        {icon}
      </button>

      <ul
        className={`absolute top-10 -left-9 z-40 w-52 bg-[#fff] shadow-minShadow py-2 
        ${!open ? "hidden" : "block"} shadow-2xl h-[98vh] overflow-scroll`}
        id="select"
      >
        <div>
          <p
            className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm text-left"
            onClick={() => {
              isClick(<BarsIcon />, "Bar");
            }}
          >
            <BarsIcon />
            <span className="ml-1">Bar</span>
          </p>

          <p
            className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm text-left"
            onClick={() => {
              isClick(<CandlesIcon />, "Candles");
            }}
          >
            <CandlesIcon />
            <span className="ml-1">Candles</span>
          </p>

          <p
            className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm text-left"
            onClick={() => {
              isClick(<HollowIcon />, "Hollow Candles");
            }}
          >
            <HollowIcon />
            <span className="ml-1">Hollow Candles</span>
          </p>

          <p
            className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm text-left"
            onClick={() => {
              isClick(<ColumnIcon />, "Columns");
            }}
          >
            <ColumnIcon />
            <span className="ml-1">Columns</span>
          </p>

          <p
            className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm text-left"
            onClick={() => {
              isClick(<LineIcon />, "Line");
            }}
          >
            <LineIcon />
            <span className="ml-1">Line</span>
          </p>

          <p
            className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm text-left"
            onClick={() => {
              isClick(<AreaIcon />, "Area");
            }}
          >
            <AreaIcon />
            <span className="ml-1">Area</span>
          </p>

          <p
            className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm text-left"
            onClick={() => {
              isClick(<BaselineIcon />, "Baseline");
            }}
          >
            <BaselineIcon />
            <span className="ml-1">Baseline</span>
          </p>

          <p
            className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm text-left"
            onClick={() => {
              isClick(<HighLowIcon />, "High-low");
            }}
          >
            <HighLowIcon />
            <span className="ml-1">High-low</span>
          </p>
        </div>
        <hr className="mt-2 border-[#e0e3eb]" />
      </ul>
    </div>
  );
};

export default Candles;
