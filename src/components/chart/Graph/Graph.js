import React, { useContext } from "react";
import { timeContext } from "../../../context/timeContext";

const Graph = () => {
  const time = useContext(timeContext);
  return (
    <div className="w-[100%] h-[92vh] bg-white ml-1 p-10 rounded-md">
      {/* <a href="https://youtu.be/vnl1X3ZNrFY" className="text-primary mx-10">
        Link
      </a> */}
      <div>
        This is a time :
        <h1 className="inline-block text-xl font-extrabold">{time}</h1>
      </div>
    </div>
  );
};

export default Graph;
