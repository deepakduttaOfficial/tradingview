import React from "react";
import { RightArrow } from "../../icons";

import Bgcard from "../../Bgcard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Videoidea = () => {
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
        <a href="#" className="text-2xl font-bold hover:text-[#2962ff]">
          Ideas <RightArrow />
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
              img={"https://s3.tradingview.com/5/5hVTZ3BP_mid.webp"}
              link="#"
              title="Let's Dollar Cost Average with Ethereum 🎯"
              body="Hi Traders, Investors and Speculators 📉📈 Ev here. Been trading crypto since 2017 and later got into stocks. I have 3 board exams on financial markets and studied"
              authorName="CryptoCheck-"
              time="12 hours ago"
              commentNumber="11"
              boostNumber="17"
              commentLink="#"
              boostLink="#"
            />
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Videoidea;
