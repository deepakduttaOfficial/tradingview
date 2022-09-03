import React, { useState } from "react";
import AccordingButton from "./AccordingButton";

const Time = ({ timeValue }) => {
  const [open, setOpen] = useState(false);
  // Main value ------------->
  const [value, setValue] = useState("D");
  //---------------------------->
  const [tooltip, setTooltip] = useState("1 day");
  // Time
  const [second, setSecond] = useState(true);
  const [minute, setMinute] = useState(true);
  const [hour, sethour] = useState(true);
  const [day, setday] = useState(true);
  const [range, setRange] = useState(true);

  const isClick = (val, tol) => {
    setTooltip(tol);
    setOpen(false);
    setValue(val);
    timeValue(val);
  };

  const seconds = [
    { option: "1 Second", value: "1s" },
    { option: "5 Second", value: "5s" },
    { option: "10 Second", value: "10s" },
    { option: "15 Second", value: "15s" },
    { option: "30 Second", value: "30s" },
  ];
  const minutes = [
    { option: "1 minute", value: "1m" },
    { option: "3 minutes", value: "3m" },
    { option: "5 minutes", value: "5m" },
    { option: "15 minutes", value: "15m" },
    { option: "30 minutes", value: "30m" },
    { option: "45 minutes", value: "45m" },
  ];
  const hours = [
    { option: "1 hour", value: "1h" },
    { option: "2 hours", value: "2h" },
    { option: "3 hours", value: "3h" },
    { option: "4 hours", value: "4h" },
  ];
  const days = [
    { option: "1 day", value: "D" },
    { option: "1 week", value: "W" },
    { option: "1 month", value: "M" },
  ];
  const ranges = [
    { option: "1 range", value: "1R" },
    { option: "10 ranges", value: "10R" },
    { option: "100 ranges", value: "100R" },
    { option: "1000 ranges", value: "1000R" },
  ];

  return (
    <div className="flex justify-center items-center ">
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
        className={` absolute  z-40 w-full h-[100vh] left-0 top-1 bg-red ${
          !open ? "hidden" : "block"
        } `}
        // onClick={() => {
        //   setOpen(false);
        // }}
      >
        <div
          className="absolute top-0 left-48 z-50 w-52 bg-[#fff]  py-2 shadow-2xl h-[98vh] overflow-scroll"
          id="select"
        >
          <div aria-level="Second">
            <AccordingButton
              time={second}
              setTime={setSecond}
              value={"second"}
            />
            <div className={`py-2 ${second ? "block" : "hidden"} duration-75`}>
              {seconds.map((second, index) => (
                <p
                  className={`px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-sm
                ${
                  value === second.value
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : ""
                }
                `}
                  onClick={() => {
                    isClick(second.value, second.option);
                  }}
                  key={index}
                >
                  {second.option}
                </p>
              ))}
            </div>
            <hr className="mt-2 border-[#e0e3eb]" />
          </div>

          <div aria-level="Minute">
            <AccordingButton
              time={minute}
              setTime={setMinute}
              value={"minute"}
            />

            <div className={`py-2 ${minute ? "block" : "hidden"} duration-75`}>
              {minutes.map((min, index) => (
                <p
                  className={`px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-sm
                ${
                  value === min.value
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : ""
                }
                `}
                  onClick={() => {
                    isClick(min.value, min.option);
                  }}
                  key={index}
                >
                  {min.option}
                </p>
              ))}
            </div>
            <hr className="mt-2 border-[#e0e3eb]" />
          </div>

          <div aria-level="hour">
            <AccordingButton time={hour} setTime={sethour} value={"hour"} />

            <div className={`py-2 ${hour ? "block" : "hidden"} duration-75`}>
              {hours.map((hour, index) => (
                <p
                  className={`px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-sm
                ${
                  value === hour.value
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : ""
                }
                `}
                  onClick={() => {
                    isClick(hour.value, hour.option);
                  }}
                  key={index}
                >
                  {hour.option}
                </p>
              ))}
            </div>
            <hr className="mt-2 border-[#e0e3eb]" />
          </div>

          <div aria-level="Day">
            <AccordingButton time={day} setTime={setday} value={"day"} />

            <div className={`py-2 ${day ? "block" : "hidden"} duration-75`}>
              {days.map((day, index) => (
                <p
                  className={`px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-sm
                 ${
                   value === day.value
                     ? "bg-blue-500 hover:bg-blue-600 text-white"
                     : ""
                 }
                 `}
                  onClick={() => {
                    isClick(day.value, day.option);
                  }}
                  key={index}
                >
                  {day.option}
                </p>
              ))}
            </div>
            <hr className="mt-2 border-[#e0e3eb]" />
          </div>

          <div aria-level="range">
            <AccordingButton time={range} setTime={setRange} value={"range"} />
            <div className={`py-2 ${range ? "block" : "hidden"} duration-75`}>
              {ranges.map((range, index) => (
                <p
                  className={`px-3 py-2 cursor-pointer hover:bg-lightGray font-medium text-sm
                  ${
                    value === range.value
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : ""
                  }
                  `}
                  onClick={() => {
                    isClick(range.value, range.option);
                  }}
                  key={index}
                >
                  {range.option}
                </p>
              ))}
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};
export default Time;
