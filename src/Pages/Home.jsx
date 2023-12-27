import React from "react";
import Navbar from "../COMPONENTS/Navbar/Navbar";
import BannerSlider from "../COMPONENTS/Banners/BannerSlider";
import HomeCategory from "../COMPONENTS/Category/HomeCategory";
import ProductSidebar from "../COMPONENTS/Products/ProductSidebar";
import Footer1 from "../COMPONENTS/Footer/Footer1";
import Footer2 from "../COMPONENTS/Footer/Footer2";
import ProductSlider from "../COMPONENTS/Product-slider/ProductSlider";
import { data } from "../data/data.js";
const Home = () => {
  const products = data;
  return (
    <div>
      <Navbar reloadNavbar={false} />
      <BannerSlider />
      <HomeCategory />
      <ProductSidebar />
      <div className="slidercont">
        <ProductSlider products={products} categoryname="Related products" />
      </div>
      <div className="slidercont">
        <ProductSlider products={products} categoryname="Explore More" />
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Home;
