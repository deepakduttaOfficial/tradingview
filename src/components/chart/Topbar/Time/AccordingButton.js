import React from "react";
import { AccordionIcon } from "../icons";

const AccordingButton = ({ time, setTime, value }) => {
  return (
    <button
      type="button"
      className="flex items-center justify-between w-full  font-medium  px-3 text-[#787b86] hover:bg-lightGray py-1"
      onClick={() => {
        setTime(!time);
      }}
    >
      <span className="text-[11px] uppercase">{value}</span>
      <AccordionIcon
        className={`${time ? "rotate-180" : "rotate-0"}  duration-75`}
      />
    </button>
  );
};

export default AccordingButton;
