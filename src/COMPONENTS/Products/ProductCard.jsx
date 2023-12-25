import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ data }) => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(1);
  const [reloadNavbar, setReloadNavbar] = useState(true);

  const addToCart = async () => {
    let productdata = data;
    let cart = await JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let itemincart = cart.find(
        (item) => item.productdata.ProductId === productdata.ProductId
      );
      if (itemincart) {
        cart = cart.map((item) => {
          if (item.productdata.ProductId === productdata.ProductId) {
            return {
              ...item,
              quantity: item.quantity + count,
            };
          } else {
            return item;
          }
        });
        // ! if current item not in the cart
      } else {
        cart = [
          ...cart,
          {
            productdata,
            quantity: count,
          },
        ];
      }
    } else {
      // ! sending product data if no cart present
      cart = [
        {
          productdata,
          quantity: count,
        },
      ];
      console.log(cart);
    }
    // setReloadNavbar(!reloadNavbar);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Added to cart", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // Set the duration for the notification to be displayed
    });
    window.location.reload();
  };

  return (
    <div className="product-card">
      <div className="s1">
        <img src={data.productImage} alt="noimage" />
      </div>
      <div className="s2">
        <h3>
          ${Math.floor(data.price - (data.price * data.discount) / 100)}
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
                setCount(count + 1);
              }}
            >
              +
            </button>
            <h6 className="qty">{count}</h6>
            <button
              className="incdec"
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
            >
              -
            </button>
          </div>
          <div className="cart_btn">
            <button
              onClick={() => {
                addToCart();
                setShow(false);
              }}
              className="add_cart"
            >
              Add to cart
            </button>
            <ToastContainer />
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
              setCount(1);
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
