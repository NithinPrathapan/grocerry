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
      categoryName: "Category 1",
    },
    {
      id: 2,
      categoryImage: clip2,
      categoryName: "Category 1",
    },
    {
      id: 3,
      categoryImage: clip3,
      categoryName: "Category 1",
    },
    {
      id: 4,
      categoryImage: clip4,
      categoryName: "Category 1",
    },
    {
      id: 1,
      categoryImage: clip1,
      categoryName: "Category 1",
    },
    {
      id: 5,
      categoryImage: clip1,
      categoryName: "Category 1",
    },
    {
      id: 6,
      categoryImage: clip2,
      categoryName: "Category 6",
    },
    {
      id: 7,
      categoryImage: clip3,
      categoryName: "Category 7",
    },
    {
      id: 8,
      categoryImage: clip4,
      categoryName: "Category 8",
    },
  ];
  return (
    <div className="category_sidebar ">
      {data.map((item) => {
        return (
          <div key={item.id} className="category">
            <img src={item.categoryImage} alt="noimage" />
            <h3>{item.categoryName}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CateorySidebar;
