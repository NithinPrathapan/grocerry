import React from "react";
import Carousel from "react-multi-carousel";
import ProductCard from "../../COMPONENTS/Products/ProductCard";
import "react-multi-carousel/lib/styles.css";

const ProductSlider = ({ products, categoryname }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h6 className="sliderhead_category">{categoryname}</h6>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        autoPlaySpeed={3000}
        draggable
        infinite
      >
        {products.map((item, i) => {
          return (
            <ProductCard
              data={item}
              key={i}
              
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
