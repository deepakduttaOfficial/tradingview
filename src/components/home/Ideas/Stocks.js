import React from "react";
import Bgcard from "../../card/Bgcard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Stocks = () => {
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
          img={"https://s3.tradingview.com/k/kGscmHB5_mid.webp"}
          link="/"
          title="What Goes Up"
          body="
          Must come down. I get that energy futures NG1! is running and everyone expects energy to have a very strong winter. How is highest energy prices and lowering"
          authorName=" VasilyTrader"
          time="13 hours ago"
          commentNumber="18"
          boostNumber="402"
          commentLink="/"
          boostLink="/"
        />
      ))}
    </OwlCarousel>
  );
};

export default Stocks;
