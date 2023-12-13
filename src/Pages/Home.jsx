import React from "react";
import Navbar from "../COMPONENTS/Navbar/Navbar";
import BannerSlider from "../COMPONENTS/Banners/BannerSlider";
import HomeCategory from "../COMPONENTS/Category/HomeCategory";
import AllProducts from "../COMPONENTS/Products/AllProducts";
import ProductSidebar from "../COMPONENTS/Products/ProductSidebar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategory />
      <ProductSidebar />
    </div>
  );
};

export default Home;
