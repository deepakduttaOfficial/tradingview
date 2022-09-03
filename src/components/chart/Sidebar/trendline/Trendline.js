import React, { useState } from "react";
import { ArrowIcon, TrendLineIcon } from "./icons";

const Trendline = () => {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(<TrendLineIcon />);
  const [value, setValue] = useState("Bars");

  const isClick = (Icon, tol) => {
    setOpen(!open);
    setValue(tol);
    setIcon(Icon);
  };
  return (
    <div
      aria-label="Trends Line"
      className="flex justify-center items-center group relative mt-1"
    >
      <div
        className="hover:bg-lightGray p-1 rounded-md group tooltip tooltip-right"
        data-tip="Trend line tools"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <TrendLineIcon />
      </div>
      <ul
        className={`absolute top-3 left-11 z-40 w-44 bg-[#fff] border border-gray 
        ${!open ? "hidden" : "block"} shadow-2xl  overflow-scroll`}
        id="select"
      >
        <div>
          <p
            className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm text-left"
            onClick={() => {
              isClick(<TrendLineIcon />, "Cross");
            }}
          >
            <TrendLineIcon />
            <span className="ml-1">Cross</span>
          </p>

          <p
            className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm text-left"
            onClick={() => {
              isClick(<ArrowIcon />, "Dot");
            }}
          >
            <ArrowIcon />
            <span className="ml-1">Dot</span>
          </p>
        </div>
      </ul>
    </div>
  );
};

export default Trendline;
