import React from "react";
import Footer from "../components/Footer/Footer";
import Community from "../components/home/Community/Community";
import Educationalideas from "../components/home/Education/Educationalideas";
import Feture from "../components/home/Feture/Feture";
import Herosection from "../components/home/Herosection/Herosection";
import Ideas from "../components/home/Ideas/Ideas";
import Marketsummary from "../components/home/Marketsummary/Marketsummary";
import PineScripts from "../components/home/PineScripts/PineScripts";
import Snaps from "../components/home/Snaps/Snaps";
import Streams from "../components/home/Streams/Streams";
import Videoidea from "../components/home/Videoidea/Videoidea";
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
      <div className="md:px-8 px-4">
        <Marketsummary />
        <Snaps />
        <Ideas />
        <Community />
        <Educationalideas />
        <PineScripts />
        <Videoidea />
        <Streams />
      </div>
      <Footer />
    </>
  );
};

export default Home;
