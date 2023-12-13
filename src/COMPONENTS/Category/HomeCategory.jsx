import React from "react";
import "./HomeCategory.css";
import clip1 from "../../Assets/images/clip1.png";
import clip2 from "../../Assets/images/clip2.png";
import clip3 from "../../Assets/images/clip3.png";
import clip4 from "../../Assets/images/clip4.png";

const HomeCategory = () => {
  return (
    <div className="home-category">
      <div className="container">
        <img src={clip1} alt="noimage" />
        <div className="content">
          <h1>Vegitables at your doorstep</h1>
          <p>Shop vegitables now</p>
        </div>
      </div>
      <div className="container">
        <img src={clip2} alt="noimage" />
        <div className="content">
          <h1>Vegitables at your doorstep</h1>
          <p>Shop vegitables now</p>
        </div>
      </div>
      <div className="container">
        <img src={clip3} alt="noimage" />
        <div className="content">
          <h1>Vegitables at your doorstep</h1>
          <p>Shop vegitables now</p>
        </div>
      </div>
      <div className="container">
        <img src={clip4} alt="noimage" />
        <div className="content">
          <h1>Vegitables at your doorstep</h1>
          <p>Shop vegitables now</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
