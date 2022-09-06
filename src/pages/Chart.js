import React, { useState } from "react";
import Graph from "../components/chart/Graph/Graph";
import Favorite from "../components/chart/mobeblecomponents/Favorite";
import Sidebar from "../components/chart/Sidebar/Sidebar";
import Topbar from "../components/chart/Topbar/Topbar";
import { timeContext } from "../context/timeContext";

const Chart = () => {
  const [timeValue, setTimeValue] = useState("D");
  const time = (time) => {
    setTimeValue(time);
  };

  return (
    <div className="bg-gray">
      {/* <div className="z-50">
        <Topbar time={time} />
      </div>
      <Favorite />
      <div className="flex mt-1 -z-50">
        <Sidebar />
        <timeContext.Provider value={timeValue}>
        </timeContext.Provider>
      </div> */}
      <Graph />
    </div>
  );
};

export default Chart;
