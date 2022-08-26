import React from "react";
import { BrowserRouter, Link, Route, Routes, Router } from "react-router-dom";
import Cart from "../../views/Cart";
import Product from "../../views/Product";
import "./../../assets/styles/scss/styles.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
