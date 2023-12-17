import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const [show, setShow] = useState(false);
  const [qty, setQty] = useState(0);
  return (
    <div className="product-card">
      <div className="s1">
        <img src={data.productImage} alt="noimage" />
      </div>
      <div className="s2">
        <h3>
          $ {""}
          {Math.floor(data.price - (data.price * data.discount) / 100)}
          <span>{data.price}</span>
        </h3>
        <p>{data.name}</p>
      </div>
      <div className="s3">
        <p>{data.countType}</p>
      </div>
      {show ? (
        <div>
          <div className="addbtn-true">
            <button
              className="incdec"
              onClick={() => {
                setQty(qty + 1);
              }}
            >
              +
            </button>
            <h6 className="qty">{qty}</h6>
            <button
              className="incdec"
              onClick={() => {
                if (qty > 1) {
                  setQty(qty - 1);
                }
              }}
            >
              -
            </button>
          </div>
          <div className="cart_btn">
            <button
              onClick={() => {
                setQty(0);
                setShow(false);
                alert("item added successfully to the cart");
              }}
              className="add_cart"
            >
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
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="addbtn">
          <Link to={`product/${data.id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              classNameapa="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>
          <svg
            onClick={() => {
              setShow(true);
              setQty(1);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
