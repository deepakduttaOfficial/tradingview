import React from "react";

const Smcard = ({
  img,
  CryptoName,
  price,
  country,
  percentage,
  link,
  className,
}) => {
  return (
    <div
      className={`card lg:w-96 rounded-lg ${
        !className && "hover:bg-[#e8edf7] bg-[#f4f7ff]"
      } ${className}`}
    >
      <div className="flex items-center p-3 ">
        <div>
          <img
            src={img}
            className="rounded-full h-9"
            alt="logo"
            loading="lazy"
          />
        </div>
        <div className="text-left ml-3">
          <a
            href={link}
            className="font-semibold text-xl hover:text-[#2962ff] "
          >
            {CryptoName}
          </a>
          <div className="mt-1">
            <span className="text-black font-semibold">{price}</span>
            <span className="text-black font-semibold">4.40</span>
            <span className="text-xs ml-1 font-normal">{country}</span>
            <span className="text-red-600 ml-3 text-base font-semibold">
              {percentage}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smcard;
