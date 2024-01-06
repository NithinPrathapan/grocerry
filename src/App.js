import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage/ProductPage";
import About from "./Pages/Extra/About";
import Contact from "./Pages/Extra/Contact";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Cart from "./Pages/Cart/Cart";
import UserProfile from "./Pages/Profile/UserProfile";
import FAQ from "./Pages/Extra/FAQ";
import PrivacyPolicy from "./Pages/Extra/PrivacyPolicy";
import TermsAndConditions from "./Pages/Extra/TermsAndConditions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div>Page not found</div>} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user/:activepage" element={<UserProfile />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
