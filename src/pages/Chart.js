import React, { useState } from "react";
import Graph from "../components/chart/Graph/Graph";
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
      <div className="z-50">
        <Topbar time={time} />
      </div>
      <div className="flex mt-1 -z-50">
        <Sidebar />
        <timeContext.Provider value={timeValue}>
          <Graph />
        </timeContext.Provider>
      </div>
    </div>
  );
};

export default Chart;
