import React from "react";
import "./CategorySidebar.css";
import clip1 from "../../Assets/images/clip1.png";
import clip2 from "../../Assets/images/clip2.png";
import clip3 from "../../Assets/images/clip3.png";
import clip4 from "../../Assets/images/clip4.png";

const CateorySidebar = () => {
  const data = [
    {
      id: 1,
      categoryImage: clip1,
      categoryName: "Vegitable",
    },
    {
      id: 2,
      categoryImage: clip2,
      categoryName: "Kitchen Items",
    },
    {
      id: 3,
      categoryImage: clip3,
      categoryName: "Curry Powders",
    },
    {
      id: 4,
      categoryImage: clip4,
      categoryName: "Spoon",
    },
    {
      id: 1,
      categoryImage: clip1,
      categoryName: "Glasses",
    },
    {
      id: 5,
      categoryImage: clip1,
      categoryName: "Fruits",
    },
    {
      id: 6,
      categoryImage: clip2,
      categoryName: "Sauce",
    },
    {
      id: 7,
      categoryImage: clip3,
      categoryName: "Cutting tools",
    },
    {
      id: 8,
      categoryImage: clip4,
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
