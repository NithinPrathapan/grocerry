import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import { Link, json, useParams } from "react-router-dom";
import img1 from "../../Assets/Products/img1.jpg";
import img2 from "../../Assets/Products/img2.jpg";
import img3 from "../../Assets/Products/img3.jpg";
import Navbar from "../../COMPONENTS/Navbar/Navbar";

const ProductPage = () => {
  const { id } = useParams();
  const [imageset, setimageset] = React.useState([]);
  const [productdata, setproductdata] = React.useState([]);
  const [activeimg, setactiveimg] = React.useState({});
  const [count, setCount] = React.useState(1);
  const [showreview, setshowreview] = React.useState(false);

  const getProductDataById = async () => {
    const temp = {
      Code: 200,
      Message: "Success",
      Data: [
        {
          ProductId: 1,
          ProductName: "Crystal glass",
          ProductDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          ProductImage: [
            {
              id: 1,
              image: img1,
            },
            {
              id: 2,
              image: img2,
            },
            {
              id: 3,
              image: img3,
            },
          ],
          ProductCode: "P1",
          ProductCategory: "Category 1",
          ProductSubCategory: "Sub Category 1",
          ProductBrand: "Brand 1",
          ProductColor: "Color 1",
          ProductSize: "Size 1",
          ProductWeight: "Weight 1",
          ProductMaterial: "Material 1",
          ProductQuantity: 10,
          ProductUnit: "Unit 1",
          ProductPrice: 100,
          SalesPrice: 80,
          ProductDiscount: 20,
          ProductDiscountType: "Percentage",
          ProductTax: 20,
          ProductTaxType: "Percentage",
          ProductShippingCharge: 20,
          ProductShippingChargeType: "Percentage",
          ProductShippingTime: "1-2 days",
          ProductShippingTimeType: "Days",
          ProductShippingLocation: "Location 1",
          ProductShippingLocationType: "Country",
          ProductShippingReturnPolicy: "Return Policy 1",
          ProductShippingReturnPolicyType: "Days",
          ProductShippingReturnPolicyDescription: "Return Policy Description 1",
          ProductShippingReturnPolicyDescriptionType: "Days",
          ProductReviews: [
            {
              ReviewId: 1,
              Name: "Harshal Jain",
              Email: "",
              Rating: 5,
              Date: "2021-08-01",
              Review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
              ReviewId: 2,
              Name: "Viraj",
              Email: "",
              Rating: 1,
              Date: "2021-08-01",
              Review:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
              ReviewId: 3,
              Name: "Harshal Jain",
              Email: "",
              Rating: 4,
              Date: "2021-08-01",
              Review:
                "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
          ],
        },
      ],
    };
    if (temp.Code === 200) {
      setimageset(temp.Data[0].ProductImage);
      setproductdata(temp.Data[0]);
      setactiveimg(temp.Data[0].ProductImage[0]);
    }
  };
  useEffect(() => {
    getProductDataById();
  }, []);

  return (
    <div className="productpage">
      <Navbar />

      <div className="pc1">
        <button className="goback">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Go Back
        </button>
        <div className="c1">
          <div className="imgset">
            {imageset.map((item) => (
              <div
                onClick={() => {
                  setactiveimg(item);
                }}
                className="imgsmall"
              >
                <img
                  className={item.id === activeimg.id ? "active" : ""}
                  src={item.image}
                  alt="items"
                />
              </div>
            ))}
          </div>
          <div className="imgbig">
            <img src={activeimg.image} alt="activeimg" />
          </div>
        </div>
        <div className="c12">
          <h1 className="head">{productdata.ProductName}</h1>
          <div className="c121">
            <p className="price">
              ${productdata.SalesPrice * count}
              <span>${productdata.ProductPrice}</span>
            </p>
            <div className="btncount">
              <button
                onClick={() => {
                  if (count > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                -
              </button>
              <p>{count}</p>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
          </div>
          <div className="cartsection">
            <button>Add to Cart</button>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;