import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/icons/cart-icon.svg";
import CartContext from "../../Context/CartContext";

function HeaderCartBtn() {
  const { cart } = useContext(CartContext);
  return (
    <Link className="flex h-full gap-1" to={"/cart"}>
      {cart.length > 0 && (
        <span className="flex h-1/2 text-xs text-white px-[9px] justify-center items-center bg-red-600 rounded-full">
          {cart.length}
        </span>
      )}

      <img className="w-6" src={cartIcon} alt="cart" />
    </Link>
  );
}

export default HeaderCartBtn;
