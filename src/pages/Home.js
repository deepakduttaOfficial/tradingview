import React from "react";
import Herosection from "../components/Herosection";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <header>
        <div className="hero"></div>
        <Navbar />
        <Herosection />
      </header>
    </>
  );
};

export default Home;
