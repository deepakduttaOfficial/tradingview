import React, { useState } from "react";

const Tabs = ({ name, components }) => {
  const [openTab, setOpenTab] = useState(0);
  return (
    <div className="flex flex-wrap mt-3">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          {name.map((value, index) => {
            return (
              <a
                key={index}
                className={`hover:bg-[#f0f3fa]  text-base font-normal font-Noto px-3 py-2 rounded-lg ${
                  openTab === index && "text-[#2962ff] bg-[#f0f3fa]"
                } block leading-normal mr-3`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(index);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {value}
              </a>
            );
          })}
        </ul>
        <div className="mt-3">
          {components.map((components, index) => {
            return (
              <div
                key={index}
                className={openTab === index ? "block" : "hidden"}
                id="link1"
              >
                {components}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
