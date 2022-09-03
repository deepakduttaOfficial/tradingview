import React, { useState } from "react";
import { AccordionIcon } from "../icons";

const Time = ({ timeValue }) => {
  const [open, setOpen] = useState(false);
  // Main value ------------->
  const [value, setValue] = useState("D");
  //---------------------------->
  const [tooltip, setTooltip] = useState("1 day");
  // Time
  const [second, setSecond] = useState(true);
  const [minute, setMinute] = useState(true);
  const [hours, setHours] = useState(true);
  const [days, setDays] = useState(true);
  const [range, setRange] = useState(true);

  const isClick = (val, tol) => {
    setTooltip(tol);
    setOpen(false);
    setValue(val);
    timeValue(val);
  };

  return (
    <div className="flex justify-center items-center  relative">
      <button
        className="px-3 py-[2px] cursor-pointer tooltip tooltip-bottom hover:bg-gray rounded-md "
        data-tip={tooltip}
        onClick={() => {
          setOpen(true);
        }}
      >
        {value}
      </button>
      <ul
        className={`absolute top-0 left-1 z-40 w-52 bg-[#fff] shadow-minShadow py-2 
        ${!open ? "hidden" : "block"} shadow-2xl h-[98vh] overflow-scroll`}
        id="select"
      >
        <div className="">
          <div aria-level="Second">
            <button
              type="button"
              class="flex items-center justify-between w-full  font-medium  px-3 text-[#787b86] hover:bg-lightGray py-1"
              onClick={() => {
                setSecond(!second);
              }}
            >
              <span class="text-[11px] ">SECONDS</span>
              <AccordionIcon
                className={`${second ? "rotate-180" : "rotate-0"}  duration-75`}
              />
            </button>

            <div className={`py-2 ${second ? "block" : "hidden"} duration-75`}>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("1s", "1 Second");
                }}
              >
                1 Second
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("5s", "5 Second");
                }}
              >
                5 Second
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("10s", "10 Second");
                }}
              >
                10 Second
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("15s", " 15 Second");
                }}
              >
                15 Second
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("30s", "30 Second");
                }}
              >
                30 Second
              </p>
            </div>
            <hr className="mt-2 border-[#e0e3eb]" />
          </div>

          <div aria-level="Minute">
            <button
              type="button"
              class="flex items-center justify-between w-full  font-medium  px-3 text-[#787b86] hover:bg-lightGray py-1"
              onClick={() => {
                setMinute(!minute);
              }}
            >
              <span class="text-[11px] ">MINUTES</span>
              <AccordionIcon
                className={`${minute ? "rotate-180" : "rotate-0"}  duration-75`}
              />
            </button>

            <div className={`py-2 ${minute ? "block" : "hidden"} duration-75`}>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("1m", "1 minute");
                }}
              >
                1 minute
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("3m", "3 minutes");
                }}
              >
                3 minutes
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("5m", "5 minutes");
                }}
              >
                5 minutes
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("15m", "15 minutes");
                }}
              >
                15 minutes
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("30m", "30 minutes");
                }}
              >
                30 minutes
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("45m", "45 minutes");
                }}
              >
                45 minutes
              </p>
            </div>
            <hr className="mt-2 border-[#e0e3eb]" />
          </div>

          <div aria-level="Hours">
            <button
              type="button"
              class="flex items-center justify-between w-full  font-medium  px-3 text-[#787b86] hover:bg-lightGray py-1"
              onClick={() => {
                setHours(!hours);
              }}
            >
              <span class="text-[11px] ">HOURS</span>
              <AccordionIcon
                className={`${hours ? "rotate-180" : "rotate-0"}  duration-75`}
              />
            </button>

            <div className={`py-2 ${hours ? "block" : "hidden"} duration-75`}>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("1h", "1 hour");
                }}
              >
                1 hour
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("2h", "2 hours");
                }}
              >
                2 hours
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("3h", "3 hours");
                }}
              >
                3 hours
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("4h", "4 hours");
                }}
              >
                4 hours
              </p>
            </div>
            <hr className="mt-2 border-[#e0e3eb]" />
          </div>

          <div aria-level="Day">
            <button
              type="button"
              class="flex items-center justify-between w-full  font-medium  px-3 text-[#787b86] hover:bg-lightGray py-1"
              onClick={() => {
                setDays(!days);
              }}
            >
              <span class="text-[11px] ">DAYS</span>
              <AccordionIcon
                className={`${days ? "rotate-180" : "rotate-0"}  duration-75`}
              />
            </button>

            <div className={`py-2 ${days ? "block" : "hidden"} duration-75`}>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("D", "1 day");
                }}
              >
                1 day
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("W", "1 week");
                }}
              >
                1 week
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("M", "1 month");
                }}
              >
                1 month
              </p>
            </div>
            <hr className="mt-2 border-[#e0e3eb]" />
          </div>

          <div aria-level="range">
            <button
              type="button"
              class="flex items-center justify-between w-full  font-medium  px-3 text-[#787b86] hover:bg-lightGray py-1"
              onClick={() => {
                setRange(!range);
              }}
            >
              <span class="text-[11px] ">RANGE</span>
              <AccordionIcon
                className={`${range ? "rotate-180" : "rotate-0"}  duration-75`}
              />
            </button>

            <div className={`py-2 ${range ? "block" : "hidden"} duration-75`}>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("1R", "1 range");
                }}
              >
                1 range
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("10R", "10 ranges");
                }}
              >
                10 ranges
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("100R", " 100 ranges");
                }}
              >
                100 ranges
              </p>
              <p
                className="px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-[#1a1f2c] text-sm"
                onClick={() => {
                  isClick("1000R", "1000 ranges");
                }}
              >
                1000 ranges
              </p>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};
export default Time;
