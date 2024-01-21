import React, { useState } from "react";
import "./YourOrders.css";
import { useSelector, useDispatch } from "react-redux";
import OrderSuccessful from "../order-success/OrderSuccessful";
import { showInvoice } from "../../redux/OrderSuccessfullSlice";

const YourOrders = () => {
  const data = [
    {
      id: 112345,
      date: "12/12/2021",
      status: "Delivered",
      total: 1000,
    },
    {
      id: 112346,
      date: "12/12/2021",
      status: "On the way",
      total: 1600,
    },
    {
      id: 112347,
      date: "12/12/2021",
      status: "Delivered",
      total: 2000,
    },
    {
      id: 112348,
      date: "12/12/2021",
      status: "Cancelled",
      total: 100,
    },
    {
      id: 112345,
      date: "12/12/2021",
      status: "Delivered",
      total: 1000,
    },
    {
      id: 112346,
      date: "12/12/2021",
      status: "On the way",
      total: 1600,
    },
    {
      id: 112347,
      date: "12/12/2021",
      status: "Delivered",
      total: 2000,
    },
    {
      id: 112348,
      date: "12/12/2021",
      status: "Cancelled",
      total: 100,
    },
  ];
  const dispatch = useDispatch();
  const orderSuccess = useSelector(
    (state) => state.orderSuccessReducer.orderSuccess
  );
  console.log(orderSuccess);
  const handleShowInvoice = () => {
    dispatch(showInvoice());
  };
  const [selectedOrderId, setSelectedOrderId] = useState(0);
  return (
    <div className="yourorders">
      {orderSuccess && (
        <OrderSuccessful
          orderId={selectedOrderId}
          message={`Order ID : ${selectedOrderId}`}
        />
      )}
      <h1 className="mainhead1">Your Orders</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td data-label="OrderID">{item.id}</td>
              <td data-label="OrderDate">{item.date}</td>
              <td data-label="Delivery Status">
                <p>
                  {item.status === "Delivered" && (
                    <span className="greendot"></span>
                  )}
                  {item.status === "On the way" && (
                    <span className="yellowdot"></span>
                  )}
                  {item.status === "Cancelled" && (
                    <span className="reddot"></span>
                  )}
                  {item.status}
                </p>
              </td>
              <td data-label="Total">
                ${""}
                {item.total}
              </td>
              <td data-label="invoice">
                <button
                  className="mainbtn"
                  onClick={() => {
                    setSelectedOrderId(item.id);
                    handleShowInvoice();
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourOrders;
