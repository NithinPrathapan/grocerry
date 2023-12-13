import React from "react";
import './Footer1.css'
import footerImage from "../../Assets/images/footer-image.png";
const Footer1 = () => {
  return (
    <div className="footer1">
      <div className="left">
        <img src={footerImage} alt="veges" />
      </div>
      <div className="right">
        <h1>Fresh vegitables and Fruits at your doorstep</h1>
        <p>
          We deliver fresh vegitables and fruits at your doorstep we deliver
          fresh vegitables and fruits at your doorstep
        </p>
      </div>
    </div>
  );
};

export default Footer1;
