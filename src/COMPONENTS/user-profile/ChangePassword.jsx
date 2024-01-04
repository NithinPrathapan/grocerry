import React from "react";
import "./ChangePassword.css";
const ChangePassword = () => {
  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Change Password</h1>
      <div className="form">
        <div className="form-group">
          <label htmlFor="opassword">
            Old Password <span>*</span>
          </label>
          <input type="text" name="opassword" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="npassword">
            New Password <span>*</span>
          </label>
          <input type="password" name="npassword" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="npassword">
            Confirm Password<span>*</span>
          </label>
          <input type="password" name="npassword" id="" />
        </div>
      </div>
      <button className="mainbtn">Change Password</button>
    </div>
  );
};

export default ChangePassword;
