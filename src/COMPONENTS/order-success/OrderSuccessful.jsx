import React, { useState } from "react";
import "./OrderSuccessful.css";
import { useDispatch } from "react-redux";
import { hideInvoice } from "../../redux/OrderSuccessfullSlice";

const OrderSuccessful = ({ orderId, message }) => {
  const dispatch = useDispatch();
  const [orderData, setOrderData] = useState({
    orderNo: orderId,
    OrderDate: "12/12/2023",
    orderStatus: "Delivered",
    customerName: "John Doe",
    customerShippingAddress:
      "Pulikkarayil H , Koorali PO , Kottayam, 686522, Kerala, India",
    customerEmail: "nithinp3256@gmail.com",
    orderItems: [
      {
        ProductName: "Product 1",
        Price: 100,
        Quantity: 2,
      },
      {
        ProductName: "Product 2",
        Price: 5000,
        Quantity: 2,
      },
    ],
    Subtotal: 25200,
    tax: 100,
    shippingCharges: 80,
    paymentType: "COD",
    total: 25380,
  });
  const handlePopup = () => {
    dispatch(hideInvoice());
  };
  return (
    <div className="ordersuccessful">
      <button onClick={handlePopup} className="popup__close-btn">
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
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="confirmationcont">
        <div className="c1">
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
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
          <h2>{message}</h2>
        </div>
        <div className="c2">
          <h2>Order Summary</h2>
          <div>
            <p>Order Number</p>
            <p>{orderData.orderNo}</p>
          </div>
          <div>
            <p>Order Date</p>
            <p>{orderData.OrderDate}</p>
          </div>
          <div>
            <p>Customer Name</p>
            <p>{orderData.customerName}</p>
          </div>
          <div>
            <p>Email</p>
            <p>{orderData.customerEmail}</p>
          </div>
          <div>
            <p>Order Status</p>
            <p>{orderData.orderStatus}</p>
          </div>
          <div>
            <p>Order Status</p>
            <p>{orderData.orderStatus}</p>
          </div>
          <div>
            <p>Shipping Address</p>
            <p>{orderData.customerShippingAddress}</p>
          </div>
          <div>
            <p>Payment method</p>
            <p>{orderData.paymentType}</p>
          </div>
          <div>
            <p>Tax</p>
            <p>{orderData.paymentType}</p>
          </div>
          <div>
            <p>Shipping Charges</p>
            <p>{orderData.shippingCharges}</p>
          </div>
          <div>
            <p>Total</p>
            <p>{orderData.Subtotal}</p>
          </div>
        </div>
        <div className="c3">
          <table className="ordersuccessfulltable">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Count</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orderData?.orderItems &&
                orderData.orderItems.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <p> {index + 1}</p>
                      </td>
                      <td>
                        <p> {item.ProductName}</p>
                      </td>
                      <td>
                        <p> ${item.Price}</p>
                      </td>
                      <td>
                        <p> {item.Quantity}</p>
                      </td>
                      <td>
                        <p> ${item.Price * item.Quantity}</p>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="totalcont">
          <p>
            {" "}
            Shipping Charge : ${""} <p>{orderData.shippingCharges}</p>
          </p>
          <p>
            {" "}
            Tax : ${""} <p>{orderData.tax}</p>
          </p>
          <p>
            {" "}
            Sub total : ${""} <p>{orderData.Subtotal}</p>
          </p>
          <p>
            {" "}
            Total : ${""} <p>{orderData.total}</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessful;
