import React from "react";
import "./CategorySidebar.css";
import vegitable from "../../Assets/images/vegitable.png";
import kitchen from "../../Assets/images/kitchen.png";
import curry from "../../Assets/images/curry.png";
import fruits from "../../Assets/images/fruits.png";
import glasses from "../../Assets/images/glasses.png";
import spoon from "../../Assets/images/spoon.png";
import sauce from "../../Assets/images/sauce.png";
import drinks from "../../Assets/images/drinks.png";

const CateorySidebar = () => {
  const data = [
    {
      id: 1,
      categoryImage: vegitable,
      categoryName: "Vegitable",
    },
    {
      id: 2,
      categoryImage: kitchen,
      categoryName: "Kitchen Items",
    },
    {
      id: 3,
      categoryImage: curry,
      categoryName: "Curry Powders",
    },
    {
      id: 4,
      categoryImage: spoon,
      categoryName: "Spoon",
    },
    {
      id: 1,
      categoryImage: glasses,
      categoryName: "Glasses",
    },
    {
      id: 5,
      categoryImage: fruits,
      categoryName: "Fruits",
    },
    {
      id: 6,
      categoryImage: sauce,
      categoryName: "Sauce",
    },
    {
      id: 7,
      categoryImage: curry,
      categoryName: "Cutting tools",
    },
    {
      id: 8,
      categoryImage: drinks,
      categoryName: "Drinks",
    },
  ];
  return (
    <div className="category_sidebar ">
      {data.map((item) => {
        return (
          <div key={item.id} className="category">
            <img src={item.categoryImage} alt="noimage" />
            <h6>{item.categoryName}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default CateorySidebar;
