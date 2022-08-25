import React from "react";
import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <div className="main-layout">
      <header>header Component</header>
      <Link to={"/cart"}>Go to cart</Link>
      {props.children}
    </div>
  );
}

export default Layout;
