import React from "react";
import Navbar from "../COMPONENTS/Navbar/Navbar";
import BannerSlider from "../COMPONENTS/Banners/BannerSlider";
import HomeCategory from "../COMPONENTS/Category/HomeCategory";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategory />
    </div>
  );
};

export default Home;
