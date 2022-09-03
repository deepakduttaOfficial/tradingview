import React from "react";

const MdCard = ({ bgImage, link, logo, cryptoName, date, title, body }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl p-2 rounded-lg hover:bg-[#F0F3FA]">
      <figure>
        <img src={bgImage} className="rounded-lg" alt="crypto" loading="lazy" />
      </figure>
      <div className="px-1 py-3">
        <div className="flex items-center">
          <div>
            <img
              src={logo}
              alt="logo"
              className="h-5 rounded-full"
              loading="lazy"
            />
          </div>
          <h6 className="text-[#131722] ml-3">{cryptoName}</h6>
          <span className="text-sm font-normal mx-1 text-[#787b86]">.</span>
          <span className="text-sm font-normal text-[#787b86]">{date}</span>
        </div>
        <div className="mt-2">
          <a
            href={link}
            className="text-[#131722] text-lg font-semibold font-Poppins"
          >
            {title}
          </a>
          <p className="text-base py-2 font-normal font-Noto text-[#131722]">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MdCard;
