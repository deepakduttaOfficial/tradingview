import React from "react";
import Bgcard from "../../card/Bgcard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Crypto = () => {
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
          img={"https://s3.tradingview.com/w/W3liiG4W_mid.webp"}
          link="/"
          title="BTC HAVE BIG CHANCES BACK TO RESISTANCE (TARGET) ZONE above 22k"
          body="Hello my friends, today I want to talk with you about BTC. As I wrote in my previous idea when Btc was fully ended, 5th waves of bearish pattern rising wedge. Price"
          authorName="AtlasTrades"
          time="Aug 22"
          commentNumber="52"
          boostNumber="273"
          commentLink="/"
          boostLink="/"
        />
      ))}
    </OwlCarousel>
  );
};

export default Crypto;
