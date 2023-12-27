import React from "react";
import "./Allproducts.css";
import ProductCard from "./ProductCard";
import { data } from "../../data/data.js";

const AllProducts = () => {
  const products = data;
  return (
    <div className="allproducts">
      <h1>All Products</h1>
      <div className="products">
        {products.map((item, index) => {
          return <ProductCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default AllProducts;
