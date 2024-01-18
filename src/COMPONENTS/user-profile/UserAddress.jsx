import React, { useState } from "react";
import "./UserAddress.css";

const UserAddress = () => {
  const [show, setShow] = useState(true);
  const savedaddress = [
    {
      AddressLine1: "Nithin",
      AddressLine2: "Pulikkarayil",
      AddressLine3: "Kottayam ",
    },
    {
      AddressLine1: "Prathapan",
      AddressLine2: "Elamgulam",
      AddressLine3: "Kottyam",
    },
    {
      AddressLine1: "Manju",
      AddressLine2: "Ponkunam",
      AddressLine3: "Kottayam",
    },
  ];
  return (
    <div className="useraddress">
      {!show && <h1 className="mainhead1">Your Address</h1>}
      {!show && (
        <div className="addressin">
          {savedaddress.map((item, index) => (
            <div className="address" key={index}>
              <span>{item.AddressLine1}</span>,<span>{item.AddressLine2}</span>,
              <span>{item.AddressLine3}</span>
              <div className="delbtn">
                <svg
                  xmlns="http://www.wtrue3.org/2000/svg"
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
              </div>
            </div>
          ))}
        </div>
      )}
      {!show && (
        <div
          onClick={() => {
            setShow(true);
          }}
          className="addnewbtn"
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      )}
      {show && (
        <div className="addnew">
          <h1 className="mainhead1">Add new address</h1>
          <div className="form">
            <div className="form-group">
              <label htmlFor="postalcode">Postal-code</label>
              <input type="text" name="" />
              <button className="getpostalcode mainbtn"> Get Postal code</button>
            </div>
            <div className="form-group"></div>
            <div className="form-group">
              <label htmlFor="addressline1">Address Line 1</label>
              <input type="text" name="" />
            </div>
            <div className="form-group">
              <label htmlFor="addressline1">Address Line 2</label>
              <input type="text" name="" />
            </div>
            <div className="form-group">
              <label htmlFor="addressline1">Address Line 3</label>
              <input type="text" name="" />
            </div>
          </div>
          <button className="mainbtn" onClick={() => setShow(false)}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAddress;
