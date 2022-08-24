import React from "react";
import { RightArrow } from "../../icons";

import Bgcard from "../../Bgcard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Streams = () => {
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
          Streams <RightArrow />
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
              img={
                "https://d3etl5p4eidc49.cloudfront.net/previews/hlJQIPY3w6_68x2ni-y4C8jlasBzyLe4.jpeg"
              }
              link="/"
              title="Discussions"
              body="Analysis And Discussions"
              authorName="Abdukadir_Wardheere"
              time="an hour ago"
            />
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Streams;
