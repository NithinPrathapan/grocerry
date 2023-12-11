import React from "react";
import Slider from "react-slick";
import "./BannerSlider.css";

const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1543086989-1a4235535818?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fresh vegitables on doorstep",
      description: "we deliver the products on your doorstep",
      button: "www.facebook.com",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1610099169256-c44f0ae44b4a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fresh vegitables on doorstep",
      description: "we deliver the products on your doorstep",
      button: "www.google.com",
    },
  ];
  return (
    <div className="bannerslider">
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div className="image-container" key={item.id}>
              <img src={item.image} alt="noimg" />
              <div className="content">
                <h1>{item.title}</h1>
                <span>{item.description}</span>
                <button>Shop more</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
