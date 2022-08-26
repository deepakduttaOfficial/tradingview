import React from "react";
import Graph from "../components/chart/Graph/Graph";
import Sidebar from "../components/chart/Sidebar/Sidebar";
import Topbar from "../components/chart/Topbar/Topbar";

const Chart = () => {
  return (
    <div className="bg-gray">
      <Topbar />
      <div className="flex mt-1">
        <Sidebar />
        <Graph />
      </div>
    </div>
  );
};

export default Chart;
