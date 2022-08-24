import React from "react";
import Bgcard from "../../Bgcard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Editors = () => {
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
          img={"https://s3.tradingview.com/r/rLkjr2sQ_mid.webp"}
          link="/"
          title="the Flasher"
          body="Briefly flashes chart background colors as a visual alert whenever a condition occurs, from the insatiable mind of @scarf . Special thanks to @LucF for his advice on"
          authorName="allanster"
          time="Aug 15"
          commentNumber="21"
          boostNumber="169"
          commentLink="/"
          boostLink="/"
        />
      ))}
    </OwlCarousel>
  );
};

export default Editors;
