import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import Footer1 from "../../COMPONENTS/Footer/Footer1";
import Footer2 from "../../COMPONENTS/Footer/Footer2";
import SingleBanner from "../../COMPONENTS/Banners/SingleBanner";
import UserSidebar from "../../COMPONENTS/user-profile/UserSidebar";
import AccountSettings from "../../COMPONENTS/user-profile/AccountSettings";
import "./UserProfile.css";
import ChangePassword from "../../COMPONENTS/user-profile/ChangePassword";
import YourOrders from "../../COMPONENTS/user-profile/YourOrders";

const UserProfile = () => {
  const { activepage } = useParams();

  return (
    <div className="userprofile">
      <Navbar />
      <SingleBanner
        heading="My Profile"
        image="https://images.unsplash.com/photo-1437419764061-2473afe69fc2?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="userprofilein">
        <div className="left">
          <UserSidebar activepage={activepage} />
        </div>
        <div className="right">
          {activepage === "accountsettings" && <AccountSettings />}
          {activepage === "changepassword" && <ChangePassword />}
          {activepage === "yourorders" && <YourOrders />}
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default UserProfile;
