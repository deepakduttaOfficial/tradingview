import React, { useState } from "react";
import { ArrowIcon, CrossIcon, DotIcon, EraserIcon } from "../cursor/icons";
import {
  FibChannelIcon,
  FibCirclesIcon,
  FibExtensionIcon,
  FibRetracementIcon,
  FibSpeedResistanceArcsIcon,
  FibSpeedResistanceFanIcon,
  FibSpiralIcon,
  FibTimeZoneIcon,
  FibWedgeIcon,
  GannBoxIcon,
  GannFanIcon,
  GannSquareFixedIcon,
  GannSquareIcon,
  InsidePitchforkIcon,
  ModifiedSchiffPitchforkIcon,
  PitchfanIcon,
  PitchforkIcon,
  SchiffPitchforkIcon,
} from "./icons";

const Fib = () => {
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
    { Component: <FibRetracementIcon />, option: "Fib Retracement", value: 1 },
    {
      Component: <FibExtensionIcon />,
      option: "Trend-Based Fib Extension",
      value: 2,
    },
    { Component: <PitchforkIcon />, option: "Pitchfork", value: 3 },
    {
      Component: <SchiffPitchforkIcon />,
      option: "Schiff Pitchfork",
      value: 4,
    },
    {
      Component: <ModifiedSchiffPitchforkIcon />,
      option: "Modified Schiff Pitchfork",
      value: 5,
    },
    {
      Component: <InsidePitchforkIcon />,
      option: "Inside Pitchfork",
      value: 6,
    },
    { Component: <FibChannelIcon />, option: "Fib Channel", value: 7 },
    { Component: <FibTimeZoneIcon />, option: "Fib Time Zone", value: 8 },
    { Component: <GannBoxIcon />, option: "Gann Box", value: 9 },
    {
      Component: <GannSquareFixedIcon />,
      option: "Gann Square Fixed",
      value: 10,
    },
    { Component: <GannSquareIcon />, option: "Gann Square", value: 11 },
    { Component: <GannFanIcon />, option: "Gann Fan", value: 12 },
    {
      Component: <FibSpeedResistanceFanIcon />,
      option: "Fib Speed Resistance Fan",
      value: 13,
    },
    { Component: <FibCirclesIcon />, option: "Fib Circles", value: 14 },
    { Component: <PitchfanIcon />, option: "Pitchfan", value: 15 },
    { Component: <FibSpiralIcon />, option: "Fib Spiral", value: 16 },
    {
      Component: <FibSpeedResistanceArcsIcon />,
      option: "Fib Speed Resistance Arcs",
      value: 17,
    },
    { Component: <FibWedgeIcon />, option: "Fib Wedge", value: 17 },
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
        className={`absolute  z-40 w-[95vw] h-[90vh] left-0 top-0  bg-transparent 
    ${!open ? "hidden" : "block"}`}
        onClick={() => {
          setOpen(false);
        }}
      >
        <div
          className="relative shadow-2xl bg-white w-60 h-[100vh] py-2 overflow-scroll top-[0px] left-[52px] rounded-md"
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

export default Fib;
