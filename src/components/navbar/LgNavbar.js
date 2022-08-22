import React from "react";
// All icons
import {
  ChartIcon,
  HeatmapIcon,
  LiveStrimeIcon,
  ScreenerIcon,
  TradeIdeaIcon,
} from "../icons";

const LgNavbar = () => {
  return (
    <>
      <ul class="menu menu-horizontal p-0">
        <li className="ml-1">
          <label className="font-medium hover:bg-[#fff3] rounded-full text-base px-4 py-2">
            Products
          </label>
          <ul class="py-2 bg-white text-black rounded-lg w-[18rem] ">
            <li className="w-full border-b">
              <a href="#" className="py-1 px-4  hover:bg-[#f0f3fa] w-full">
                <ChartIcon />
                <div className="ml-2">
                  <span className="font-medium">Chart+</span>
                  <br />
                  <span className="text-xs text-slate-400 -mt-3">
                    Often imitated, never duplicated
                  </span>
                </div>
              </a>
            </li>

            <li className="w-full border-b">
              <a href="#" className="py-1 px-4 hover:bg-[#f0f3fa] w-full">
                <ScreenerIcon />

                <div className="ml-2">
                  <span className="font-medium">Screeners</span>
                  <br />
                  <span className="text-xs text-slate-400 -mt-3">
                    Find anything with a simple scan
                  </span>
                </div>
              </a>
            </li>

            <li className="w-full">
              <a href="#" className="py-1 px-4 hover:bg-[#f0f3fa] w-full">
                <HeatmapIcon />
                <div className="ml-2">
                  <span className="font-medium">Heatmaps</span>
                  <br />
                  <span className="text-xs text-slate-400">
                    See the full picture for global markets
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </li>

        <li className="ml-1">
          <label
            href="#"
            className="font-medium hover:bg-[#fff3] rounded-full text-base px-3 py-2"
          >
            Community
          </label>
          <ul class="py-2 bg-white text-black rounded-lg w-[16rem] ">
            <li className="w-full border-b">
              <a href="#" className="py-2 px-4  hover:bg-[#f0f3fa] w-full">
                <LiveStrimeIcon />
                <div className="ml-2">
                  <span className="font-medium">Live streams</span>
                </div>
              </a>
            </li>

            <li className="w-full">
              <a href="#" className="py-2 px-4 hover:bg-[#f0f3fa] w-full">
                <TradeIdeaIcon />
                <div className="ml-2">
                  <span className="font-medium">Trade ideas</span>
                </div>
              </a>
            </li>
          </ul>
        </li>

        <li className="ml-1 ">
          <a
            href="#"
            className="font-medium hover:bg-[#fff3] rounded-full text-base px-3 py-2"
          >
            Markets
          </a>
          <ul class="py-2 bg-white text-black rounded-lg w-[15rem] ">
            <li className=" w-full border-b ">
              <a href="#" className="py-2 px-4 hover:bg-[#f0f3fa] w-full">
                <div className="ml-2">
                  <span className="font-medium">Snaps</span>
                </div>
              </a>
            </li>

            <li className="w-full border-b">
              <a href="#" className="py-2 px-4 hover:bg-[#f0f3fa] w-full">
                <div className="ml-2">
                  <span className="font-medium">Breaking news</span>
                </div>
              </a>
            </li>

            <li className="w-full">
              <a href="#" className="py-2 px-4 hover:bg-[#f0f3fa] w-full">
                <div className="ml-2">
                  <span className="font-medium">Sparks</span>
                </div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default LgNavbar;
