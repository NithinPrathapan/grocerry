import React from "react";
import "./Allproducts.css";
import ProductCard from "./ProductCard";
import clip1 from "../../Assets/images/clip1.png";

const AllProducts = () => {
  const data = [
    {
      id: 1,
      name: "Apples",
      productImage: clip1,
      countType: "count 1",
      price: 22.99,
      discount: 13,
    },
    {
      id: 2,
      name: "Milk",
      productImage:
        "https://images.unsplash.com/photo-1600788907416-456578634209?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      countType: "count 1",
      price: 21.49,
      discount: 13,
    },
    {
      id: 2,
      name: "Milk",
      productImage:
        "https://images.unsplash.com/photo-1600788907416-456578634209?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      countType: "count 1",
      price: 21.49,
      discount: 13,
    },
    {
      id: 3,
      name: "Bread",
      productImage:
        "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      countType: "count 1",
      price: 42.29,
      discount: 13,
    },
    {
      id: 4,
      name: "Eggs",
      productImage:
        "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      countType: "count 1",
      price: 6.99,
      discount: 13,
    },
    {
      id: 5,
      name: "Bananas",
      productImage: clip1,
      countType: "count 1",
      price: 16.79,
      discount: 13,
    },
    {
      id: 6,
      name: "Tomatoes",
      productImage: clip1,
      countType: "count 1",
      price: 28.49,
      discount: 15,
    },
    {
      id: 7,
      name: "Chicken Breast",
      productImage: clip1,
      countType: "count 1",
      price: 55.99,
      discount: 15,
    },
    {
      id: 8,
      name: "Pasta",
      productImage: clip1,
      countType: "count 1",
      price: 40.79,
      discount: 15,
    },
    {
      id: 9,
      name: "Orange Juice",
      productImage: clip1,
      countType: "count 1",
      price: 30.49,
      discount: 5,
    },
    // Add more grocery items as needed
  ];

  return (
    <div className="allproducts">
      <h1>All Products</h1>
      <div className="products">
        {data.map((item) => {
          return <ProductCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default AllProducts;