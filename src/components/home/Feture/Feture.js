import React from "react";
import { BgButton } from "../../Button";
import featurevideo from "../../../assets/feature.mp4";

const Feture = () => {
  return (
    <div className="text-white bg-black py-[120px] px-8 text-center">
      <div>
        <h1 className="text-whte text-[40px] md:text-[56px] lg:text-[80px] font-semibold font-Poppins">
          Eat. Sleep. Trade. Repeat.
        </h1>
        <h3 className="md:text-[28px] text-[18px] font-Noto font-normal mb-16">
          Join 30 millions traders and investors making better, brighter
          decisions in the world markets.
        </h3>
        <BgButton>Explore features</BgButton>
      </div>
      <div className="mt-14">
        <video width={"100%"} loop={true} autoPlay={true} muted preload="none">
          <source src={featurevideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Feture;
