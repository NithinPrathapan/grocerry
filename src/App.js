import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage/ProductPage";
import About from "./Pages/Extra/About";
import Contact from "./Pages/Extra/Contact";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
