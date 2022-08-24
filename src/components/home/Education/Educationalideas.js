import React from "react";
import { RightArrow } from "../../icons";

import Bgcard from "../../Bgcard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Educationalideas = () => {
  let option = {
    0: {
      items: 1,
    },
    900: {
      items: 1,
    },
    1215: {
      items: 2,
    },
  };

  // Data came from backend
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <div className="my-10">
      <div>
        <a href="/" className="text-2xl font-bold hover:text-[#2962ff]">
          Educational ideas <RightArrow />
        </a>
      </div>
      <div className="mt-10">
        <OwlCarousel
          className="owl-theme relative"
          margin={1}
          items={2}
          dots={false}
          refreshClass
          responsive={option}
          nav
          navText={[
            "<div class='left-arrow sm:top-[30%] top-[20%]  left-0'><i class='fa-solid fa-chevron-left'></i></div>",
            "<div class='right-arrow sm:top-[30%] top-[20%]  right-0'><i class='fa-solid fa-chevron-right'></i></div>",
          ]}
        >
          {data.map((index) => (
            <Bgcard
              key={index}
              img={"https://s3.tradingview.com/u/UMwCK18n_mid.webp"}
              link="/"
              title="Island Reversal Pattern"
              body="The Island Reversal pattern is when increased distributions in overnight activity cause gaps up and eventually volume exhaustion a second gap down forming an island of"
              authorName="SPYvsGME"
              time="Aug 23"
              commentNumber="3"
              boostNumber="25"
              commentLink="/"
              boostLink="/"
            />
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Educationalideas;
