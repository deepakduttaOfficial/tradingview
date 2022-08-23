import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import btn3 from "../../../assets/buttonimages/btn3.svg";
import Smcard from "../../Smcard";

const Crypto = () => {
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
  return (
    <OwlCarousel
      className="owl-theme"
      margin={10}
      items={3}
      dots={false}
      refreshClass
      responsive={option}
    >
      {data.map((index) => (
        <Smcard
          className={index == 1 && "bg-[#8cc1ef26]"}
          key={index}
          img={btn3}
          CryptoName={"Test Crypto"}
          price={2125}
          country={"USA"}
          percentage={"-0.73%"}
          link={"#"}
        />
      ))}
    </OwlCarousel>
  );
};

export default Crypto;
