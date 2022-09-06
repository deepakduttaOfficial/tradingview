import React, { useContext } from "react";
import { timeContext } from "../../../context/timeContext";
import Favorite from "../mobeblecomponents/Favorite";
import TradingViewWidget from "react-tradingview-widget";
const Graph = () => {
  // const time = useContext(timeContext);

  return (
    <div className="w-[100%] h-[100vh] bg-white   rounded-md">
      <TradingViewWidget
        symbol={"EURUSD"}
        // height={"100%"}
        width={"100%"}
        hide_side_toolbar={false}
        withdateranges={true}
        show_popup_button={true}
        popup_width={"1000"}
        popup_height={"650"}
        className="graph"
        toolbar_bg={"#f1f3f6"}
        indicator={false}
        locale="in"
      />
    </div>
  );
};

export default Graph;
