import React from "react";
import Bgcard from "../../card/Bgcard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Popular = () => {
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
          img={"https://s3.tradingview.com/q/Qt7fqntR_mid.webp"}
          link="/"
          title="Breakout Probability (Expo)"
          body="█ Overview Breakout Probability is a valuable indicator that calculates the probability of a new high or low and displays it as a level with its "
          authorName="Zeiierman"
          time="Jul 31"
          commentNumber="11"
          boostNumber="483"
          commentLink="/"
          boostLink="/"
        />
      ))}
    </OwlCarousel>
  );
};

export default Popular;
