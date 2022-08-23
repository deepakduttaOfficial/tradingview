import React from "react";
import Feture from "../components/home/Feture";
import Herosection from "../components/home/Herosection";
import Marketsummary from "../components/home/Marketsummary/Marketsummary";
import Snaps from "../components/home/Snaps/Snaps";
import { DownarrowIcon } from "../components/icons";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <header className="h-[100vh]">
        <div className="hero"></div>
        <Navbar />
        <Herosection />
        <div className="text-white absolute bottom-7 flex justify-center animate-bounce w-full -z-10">
          <DownarrowIcon />
        </div>
      </header>
      <Feture />
      <div className="px-8">
        <Marketsummary />
        <Snaps />
      </div>
    </>
  );
};

export default Home;
