import React from "react";
import comment from "../assets/comment.svg";
import boost from "../assets/boost.svg";

const Bgcard = ({
  img,
  link,
  title,
  body,
  authorName,
  time,
  commentNumber,
  boostNumber,
  commentLink,
  boostLink,
}) => {
  return (
    <div class="card card-compact bg-base-100 shadow-xl p-2 rounded-lg hover:bg-[#F0F3FA] lg:w-[620px]">
      <figure>
        <img src={img} className="rounded-lg" alt="crypto" loading="lazy" />
      </figure>
      <div class="px-1 py-3">
        <div className="mt-2">
          <a
            href={link}
            className="text-[#131722] text-lg font-semibold font-Noto"
          >
            {title}
          </a>
          <p className="text-base py-2 font-light font-Poppins text-[#131722]">
            {body}
          </p>
          <div className="flex justify-between mt-2 items-center">
            <div className="flex flex-col">
              <span className="text-sm">by {authorName}</span>
              <span className="text-sm text-[#787b86]">{time}</span>
            </div>
            <div className="flex">
              <a
                href={commentLink}
                className="py-[6px] px-4 border cursor-pointer mr-2 rounded-lg flex hover:bg-gray-300"
              >
                <img src={comment} alt="comment" />
                <span className="ml-1">{commentNumber}</span>
              </a>
              <a
                href={boostLink}
                className="py-[6px] px-4 border cursor-pointer mr-2 rounded-lg flex hover:bg-gray-300"
              >
                <img src={boost} alt="comment" />
                <span className="ml-1">{boostNumber}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bgcard;
