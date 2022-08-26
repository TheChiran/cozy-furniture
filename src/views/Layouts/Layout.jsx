import React from "react";
import { Link } from "react-router-dom";
import Header from "../../sections/Header";

function Layout(props) {
  return (
    <div className="main-layout">
      <Header />
      <Link to={"/cart"}>Go to cart</Link>
      {props.children}
    </div>
  );
}

export default Layout;
