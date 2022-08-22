import React from "react";

export const MdButton = (name) => {
  return (
    <>
      <a class="bg-primary px-4 py-2 text-white rounded-full cursor-pointer hover:bg-[#1e53e5] text-lg font-normal">
        {name.children}
      </a>
    </>
  );
};

export const Dynamic = () => {
  return <div>Dynamic</div>;
};
