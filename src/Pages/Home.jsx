import React from "react";
import Navbar from "../COMPONENTS/Navbar/Navbar";
import BannerSlider from "../COMPONENTS/Banners/BannerSlider";
import HomeCategory from "../COMPONENTS/Category/HomeCategory";
import ProductSidebar from "../COMPONENTS/Products/ProductSidebar";
import Footer1 from "../COMPONENTS/Footer/Footer1";
import Footer2 from "../COMPONENTS/Footer/Footer2";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategory />
      <ProductSidebar />
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Home;
