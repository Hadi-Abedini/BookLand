import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/icons/cart-icon.svg";

function HeaderCartBtn() {
  return (
    <Link to={"/cart"}>
      <img className="w-6" src={cartIcon} alt="cart" />
    </Link>
  );
}

export default HeaderCartBtn;
