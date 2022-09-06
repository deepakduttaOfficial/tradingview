import React from "react";

import Draggable from "react-draggable";
import { VerticalDivider } from "../divider";
import { BrushIcon, TextIcon } from "../Sidebar/icons";
import { Moveicon } from "./icons";

const Favorite = () => {
  return (
    <Draggable bounds={"parent"}>
      <div className="box shadow-minShadow inline-block select-none bg-white absolute z-50 rounded-md">
        <div className="flex justify-center items-center">
          <div className="px-3 py-4 flex justify-center items-center cursor-grab ">
            <Moveicon />
          </div>
          <VerticalDivider />
          <div className="px-1">
            <div
              aria-label="Text"
              className="flex justify-center items-center group relative"
            >
              <div className="hover:bg-lightGray p-1 rounded-md group">
                <BrushIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Favorite;
