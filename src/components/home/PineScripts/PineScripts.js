import React from "react";
import { RightArrow } from "../../icons";
import Tabs from "../../Tab";
import Editors from "./Editors";
import Popular from "./Popular";
import Recent from "./Recent";

const PineScripts = () => {
  let names = ["Editors' picks", "Popular", "Recent"];
  let components = [<Editors />, <Popular />, <Recent />];
  return (
    <div className="my-10">
      <div>
        <a href="/" className="text-2xl font-bold hover:text-[#2962ff]">
          Pine Scripts <RightArrow />
        </a>
      </div>
      <Tabs name={names} components={components} />
    </div>
  );
};

export default PineScripts;
