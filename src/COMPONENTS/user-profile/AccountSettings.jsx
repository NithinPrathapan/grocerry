import React from "react";
import "./AccountSettings.css";
const AccountSettings = () => {
  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Personal Information</h1>
      <div className="form">
        <div className="form-group">
          <label htmlFor="name">
            Your Name <span>*</span>
          </label>
          <input type="text" name="name" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">
            Phone/Mobile <span>*</span>
          </label>
          <input type="text" name="mobile" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input type="email" name="email" id="" />
        </div>
      </div>
        <button className="mainbtn">Save Details</button>
    </div>
  );
};

export default AccountSettings;
