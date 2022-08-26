import React from "react";
import { BrowserRouter, Link, Route, Routes, Router } from "react-router-dom";
import Cart from "../../views/Cart";
import Home from "../../views/Home";
import "./../../assets/styles/scss/styles.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
