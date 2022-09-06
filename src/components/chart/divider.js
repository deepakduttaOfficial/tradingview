import React from "react";

export const VerticalDivider = () => {
  return (
    <div aria-level="Divider" className="h-6 w-[2px] bg-gray m-auto"></div>
  );
};

export const HorizontalDivider = () => {
  return (
    <div aria-level="Divider" className="h-[2px] w-full bg-gray m-auto "></div>
  );
};
