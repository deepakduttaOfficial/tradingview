import React from "react";

const Time = () => {
  return (
    <div
      className="px-3 py-[2px] flex justify-center items-center cursor-pointer tooltip tooltip-bottom hover:bg-gray rounded-md"
      data-tip="1 day"
    >
      <span>D</span>
    </div>
  );
};

export default Time;
