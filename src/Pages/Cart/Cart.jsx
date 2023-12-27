import React, { useEffect, useState } from "react";
import "./Cart.css";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import Footer1 from "../../COMPONENTS/Footer/Footer1";
import Footer2 from "../../COMPONENTS/Footer/Footer2";
import SingleBanner from "../../COMPONENTS/Banners/SingleBanner";
import "./Cart.css";
import "./Progress.css";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [active, setActive] = useState(1);
  const [tax, setTax] = useState(0);

  const checkLogin = () => {
    return true;
  };
  const getCartData = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      console.log(cart);
      setCartData(cart);
      let tempSubtotal = 0;
      cart.forEach((item) => {
        tempSubtotal += item.productdata.SalesPrice * item.quantity;
      });
      setSubtotal(tempSubtotal);
      setShipping(80);
      setTax(tempSubtotal * 0.18 + tempSubtotal);
    } else {
      console.log("not present");
    }
  };
  useEffect(() => {
    getCartData();
  }, []);
  const cartImg =
    "https://images.unsplash.com/photo-1636609512336-f55af3e464d0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnR8ZW58MHx8MHx8fDA%3D";
  return (
    <div>
      <Navbar />
      <SingleBanner heading="My Cart" image={cartImg} />
      <div className="cart">
        <div className="progress">
          {active === 1 ? (
            <div
              className="c11"
              onClick={() => {
                checkLogin() && setActive(1);
              }}
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span>My cart</span>
            </div>
          ) : (
            <div
              className="c1"
              onClick={() => {
                checkLogin() && setActive(1);
              }}
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span>My cart</span>
            </div>
          )}
          {active === 2 ? (
            <div
              className="c11"
              onClick={() => {
                checkLogin() && setActive(2);
              }}
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span>Shipping</span>
            </div>
          ) : (
            <div
              className="c1"
              onClick={() => {
                checkLogin() && setActive(2);
              }}
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span>Shipping</span>
            </div>
          )}
          {active === 3 ? (
            <div
              className="c11"
              onClick={() => {
                checkLogin() && setActive(3);
              }}
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
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>

              <span>Payment</span>
            </div>
          ) : (
            <div
              className="c1"
              onClick={() => {
                checkLogin() && setActive(3);
              }}
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
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>

              <span>Payment</span>
            </div>
          )}
          {active === 4 ? (
            <div
              className="c11"
              onClick={() => {
                checkLogin() && setActive(4);
              }}
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
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              <span>Sucess</span>
            </div>
          ) : (
            <div
              className="c1"
              onClick={() => {
                checkLogin() && setActive(4);
              }}
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
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              <span>Sucess</span>
            </div>
          )}
        </div>
        {active === 1 && (
          <div className="cartcont">
            <p>Cart container</p>
          </div>
        )}
        {active === 2 && (
          <div className="shippingcont">
            <p>Shipping container</p>
          </div>
        )}
        {active === 3 && (
          <div className="paymentcont">
            <p>Payment container</p>
          </div>
        )}
        {active === 4 && (
          <div className="ordersuccessfull">
            <p>Sucess container</p>
          </div>
        )}
        {active === 1 && cartData.length > 0 && (
          <div className="btns">
            <button
              className="nextbtn"
              onClick={() => {
                checkLogin() && setActive(2);
              }}
            >
              Next
            </button>
          </div>
        )}
        {active === 2 && (
          <div className="btns">
            <button
              className="backbtn"
              onClick={() => {
                checkLogin() && setActive(1);
              }}
            >
              Back
            </button>
            <button
              className="nextbtn"
              onClick={() => {
                checkLogin() && setActive(3);
              }}
            >
              Next
            </button>
          </div>
        )}
        {active === 3 && (
          <div className="btns">
            <button
              className="backbtn"
              onClick={() => {
                checkLogin() && setActive(2);
              }}
            >
              Back
            </button>
            <button
              className="nextbtn"
              onClick={() => {
                checkLogin() && setActive(4);
              }}
            >
              Next
            </button>
          </div>
        )}
        {active === 4 && (
          <div className="btns">
            <button
              className="backbtn"
              onClick={() => {
                checkLogin() && setActive(0);
                alert("Order Placed");
              }}
            >
              Go To Home
            </button>
          </div>
        )}
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Cart;
