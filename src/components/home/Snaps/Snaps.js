import React from "react";
import { RightArrow } from "../../icons";
import MdCard from "../../card/MdCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import btn1 from "../../../assets/buttonimages/btn1.svg";

const Snaps = () => {
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
  const data = [1, 2, 3, 4, 5, 6];
  const testData = {
    bgImage: `https://s3.tradingview.com/timeline/1-min_56958726.jpg`,
    link: `${"#"}`,
    logo: btn1,
    cryptoName: `BTCUSD`,
    date: `Aug 22`,
    title: ` Crypto bulls get cold feet`,
    body: `Any crypto bulls that were taking off their wooly hats to prepare
    for the end of the crypto winter get a stark reminder that bear
    season ain’t over yet. Bundle up peeps.`,
  };
  const { bgImage, link, logo, cryptoName, date, title, body } = testData;
  return (
    <div className="mt-[100px]">
      <div>
        <a href="/" className="text-3xl font-bold hover:text-[#2962ff]">
          Snaps <RightArrow />
        </a>
        <p className="text-lg font-normal font-Noto text-black mt-1">
          Your essential 20 second market digests.
        </p>
      </div>
      <div className="mt-10">
        <OwlCarousel
          className="owl-theme relative"
          margin={10}
          items={3}
          dots={false}
          refreshClass
          responsive={option}
          nav
          navText={[
            "<div class='left-arrow top-36 left-0'><i class='fa-solid fa-chevron-left'></i></div>",
            "<div class='right-arrow top-36 right-0'><i class='fa-solid fa-chevron-right'></i></div>",
          ]}
        >
          {data.map((index) => (
            <MdCard
              key={index}
              bgImage={bgImage}
              link={link}
              logo={logo}
              cryptoName={cryptoName}
              date={date}
              title={title}
              body={body}
            />
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Snaps;
