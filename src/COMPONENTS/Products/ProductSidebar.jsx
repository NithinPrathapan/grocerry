import React from "react";
import "./ProductSidebar.css";
import CateorySidebar from "./CateorySidebar";
import AllProducts from "./AllProducts";

const ProductSidebar = () => {
  return (
    <div className="product_sidebar">
      <CateorySidebar />
      <AllProducts />
    </div>
  );
};

export default ProductSidebar;
