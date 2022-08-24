import React from "react";
import Tabs from "../../Tab";
import Crypto from "./Crypto";
import Forex from "./Forex";
import Stocks from "./Stocks";

const Community = () => {
  let names = ["Stocks", "Crypto", "Forex"];
  let components = [<Stocks />, <Crypto />, <Forex />];
  return (
    <div className="my-10">
      <div>
        <a href="/" className="text-2xl font-bold hover:text-[#2962ff]">
          Community favorites right now
        </a>
      </div>
      <div>
        <Tabs name={names} components={components} />
      </div>
    </div>
  );
};

export default Community;
