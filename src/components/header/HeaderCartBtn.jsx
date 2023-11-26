import React from "react";
import { Link } from "react-router-dom";

function HeaderCartBtn() {
  return (
    <Link to={"/cart"}>
      <img className="w-6" src="src/assets/icons/cart-icon.svg" alt="cart" />
    </Link>
  );
}

export default HeaderCartBtn;
