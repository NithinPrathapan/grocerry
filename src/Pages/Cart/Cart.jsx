import React, { useEffect, useState } from "react";
import "./Cart.css";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import Footer1 from "../../COMPONENTS/Footer/Footer1";
import Footer2 from "../../COMPONENTS/Footer/Footer2";
import SingleBanner from "../../COMPONENTS/Banners/SingleBanner";
import "./Cart.css";
import "./Progress.css";
import "./CartContainer.css";
import "./ShippingContainer.css";
import "./OrderSuccess.css";
import "./PaymentContainer.css";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [reloadNavbar, setReloadNavbar] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [active, setActive] = useState(1);
  const [tax, setTax] = useState(18);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(
    new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0]
  );
  const handleRadioChange = (index) => {
    setSelectedAddress(index);
  };
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
      setTax(18);
    } else {
      console.log("not present");
    }
  };
  useEffect(() => {
    getCartData();
  }, []);
  const cartImg =
    "https://images.unsplash.com/photo-1636609512336-f55af3e464d0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnR8ZW58MHx8MHx8fDA%3D";

  const removeItemFromCart = (index) => {
    let temp = [...cartData];
    temp.splice(index, 1);
    setCartData(temp);
    localStorage.setItem("cart", JSON.stringify(temp));
    getCartData();
  };
  const savedAddress = [
    {
      Addressline1: "Address Line 1",
      Addressline2: "Address Line 2",
      Addressline3: "Address Line 3",
      postalCode: "767668",
    },
    {
      Addressline1: "Address Line 1",
      Addressline2: "Address Line 2",
      Addressline3: "Address Line 3",
      postalCode: "337887",
    },
  ];

  return (
    <div>
      <Navbar reloadNavbar={reloadNavbar} />
      <SingleBanner heading="My Cart" image={cartImg} />
      <div className="cart">
        <div className="progress">
          {active === 1 ? (
            <div
              className="c11"
              onClick={() => {
                cartData.length > 0 &&
                  cartData.length > 0 &&
                  checkLogin() &&
                  setActive(1);
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
                cartData.length > 0 && checkLogin() && setActive(1);
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
                cartData.length > 0 && checkLogin() && setActive(2);
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
                cartData.length > 0 && checkLogin() && setActive(2);
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
                cartData.length > 0 && checkLogin() && setActive(3);
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
                cartData.length > 0 && checkLogin() && setActive(3);
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
                cartData.length > 0 && checkLogin() && setActive(4);
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
                cartData.length > 0 && checkLogin() && setActive(4);
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
            {cartData.length > 0 ? (
              <table className="carttable">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item, index) => {
                    console.log(item);
                    console.log(index, "index");
                    return (
                      <tr key={index} className="cartitemrow">
                        <td data-label="Product">
                          <div
                            onClick={() => {
                              window.location.href = `product/${item.productdata.ProductId}`;
                            }}
                            className="cartProduct"
                          >
                            <img
                              src={item.productdata.ProductImage[0].image}
                              alt="noimage"
                            />
                            <p>{item.productdata.ProductName}</p>
                          </div>
                        </td>
                        <td data-label="Quantity" className="quantity">
                          <div className="quantity">
                            <button
                              onClick={() => {
                                let newCartData = [...cartData];
                                if (newCartData[index].quantity > 1) {
                                  newCartData[index].quantity -= 1;
                                }
                                setCartData(newCartData);
                                localStorage.setItem(
                                  "cart",
                                  JSON.stringify(newCartData)
                                );
                                getCartData();
                              }}
                              className="minus"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => {
                                let newCartData = [...cartData];
                                if (newCartData[index].quantity >= 1) {
                                  newCartData[index].quantity += 1;
                                }
                                setCartData(newCartData);
                                localStorage.setItem(
                                  "cart",
                                  JSON.stringify(newCartData)
                                );
                                getCartData();
                              }}
                              className="plus"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td data-label="Price" className="price">
                          <p>
                            {" "}
                            $
                            {item.productdata.SalesPrice
                              ? item.productdata.SalesPrice.toFixed(2)
                              : 0}
                          </p>
                        </td>
                        <td data-label="Total" className="total">
                          <p>
                            {" "}
                            $
                            {(
                              item.productdata.SalesPrice * item.quantity
                            ).toFixed(2)}
                          </p>
                        </td>
                        <td data-label="Remove">
                          <div
                            onClick={() => {
                              removeItemFromCart(index);
                            }}
                            className="delbtn"
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
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Sub-Total</td>
                    <td className="totaltableright">{subtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Shipping charges</td>
                    <td className="totaltableright">{shipping.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Total</td>
                    <td className="totaltableright">
                      {(shipping + subtotal).toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Tax</td>
                    <td className="totaltableright">{tax.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="totaltableleft">Net Total</td>
                    <td className="totaltableright">
                      {(tax + subtotal + shipping).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="emptycart">
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
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <p>Your cart is empty</p>
              </div>
            )}
          </div>
        )}
        {active === 2 && (
          <div className="shippingcont">
            <div className="selectdate">
              <h2 className="mainhead1">Select Delivery Date</h2>
              <input
                type="date"
                min={
                  new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
                    .toISOString()
                    .split("T")[0]
                }
                value={deliveryDate}
                onChange={(e) => {
                  setDeliveryDate(e.target.value);
                }}
              />
            </div>
            <div className="previous">
              <h2 className="mainhead1">Previous Saved Address</h2>
              {savedAddress.length > 0 ? (
                savedAddress.map((item, index) => {
                  return (
                    <div key={index} className="radio">
                      <input
                        checked={selectedAddress === index}
                        type="radio"
                        onChange={() => {
                          handleRadioChange(index);
                        }}
                      />
                      <span>
                        {item.Addressline1 +
                          "," +
                          item.Addressline2 +
                          "," +
                          item.Addressline3 +
                          "," +
                          item.postalCode}
                      </span>
                    </div>
                  );
                })
              ) : (
                <div className="emptyaddress">
                  <p>No address found</p>
                </div>
              )}
            </div>
            <h2 className="mainhead1">OR</h2>
            <div className="shippingadd">
              <input type="text" placeholder="Address Line 1" />
              <input type="text" placeholder="Address Line 2" />
              <input type="text" placeholder="Address Line 3" />
              <input type="text" placeholder="Postal Code" />
              <button className="savebtn">Save</button>
            </div>
          </div>
        )}
        {active === 3 && (
          <div className="paymentcont">
            <h2 className="mainhead1">Select Payment Method</h2>
            <div className="paymenttypes">
              <div className="c1">
                <input type="radio" name="payment" id="payment" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
                  alt="paypal"
                />
              </div>
              <div className="c1">
                <input type="radio" name="payment" id="payment" />
                <img
                  src="https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg"
                  alt="paypal"
                />
              </div>
              <div className="c1">
                <input type="radio" name="payment" id="payment" />
                <img
                  src="https://d6xcmfyh68wv8.cloudfront.net/newsroom-content/uploads/2022/07/Razorpay_payments.png"
                  alt="paypal"
                />
              </div>
            </div>
            <div className="paymentagreement">
              <input type="checkbox" name="agreement" id="agreement" />
              <label htmlFor="agreement">
                I agree to the terms and conditions
              </label>
            </div>
            <div className="c2">
              <span>Net Total</span>
              &nbsp;&nbsp;
              <span>${(subtotal + tax + shipping).toFixed(2)}</span>
            </div>
          </div>
        )}
        {active === 4 && (
          <div className="ordersuccessfull">
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
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h2 className="mainhead1">Order Placed Successfully</h2>
            <p>Thank you for shopping with us</p>
            <p>
              Order ID : <span>32567</span>
            </p>
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
