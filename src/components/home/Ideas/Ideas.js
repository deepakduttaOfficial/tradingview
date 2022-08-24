import React from "react";
import { RightArrow } from "../../icons";
import Tabs from "../../Tab";
import Crypto from "./Crypto";
import Editors from "./Editors";
import Stocks from "./Stocks";

const Ideas = () => {
  let names = ["Editors' picks", "Stocks", "Crypto"];
  let components = [<Editors />, <Stocks />, <Crypto />];
  return (
    <div className="my-10">
      <div>
        <a href="#" className="text-2xl font-bold hover:text-[#2962ff]">
          Ideas <RightArrow />
        </a>
      </div>
      <Tabs name={names} components={components} />
    </div>
  );
};

export default Ideas;
