import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage/ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div>Page not found</div>} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
