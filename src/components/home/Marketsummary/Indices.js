import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import btn1 from "../../../assets/buttonimages/btn1.svg";
import Smcard from "../../card/Smcard";

const Indices = () => {
  let option = {
    0: {
      items: 1,
    },
    900: {
      items: 2,
    },
    1215: {
      items: 3,
    },
  };

  // Data came from backend
  const data = [1, 2, 3, 4, 5, 6];
  //

  return (
    <OwlCarousel
      className="owl-theme relative overflow-y-hidden h-20"
      margin={10}
      items={3}
      dots={false}
      refreshClass
      responsive={option}
      nav
      navText={[
        "<div class='left-arrow top-5 left-0'><i class='fa-solid fa-chevron-left'></i></div>",
        "<div class='right-arrow top-5 right-0'><i class='fa-solid fa-chevron-right'></i></div>",
      ]}
    >
      {data.map((index) => (
        <Smcard
          className={index === 1 && "bg-[#8cc1ef26]"}
          key={index}
          img={btn1}
          CryptoName={"Test Indices"}
          price={2125}
          country={"USA"}
          percentage={"-0.73%"}
          link={"/"}
        />
      ))}
    </OwlCarousel>
  );
};

export default Indices;
//
