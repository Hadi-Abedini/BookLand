import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <ul className="flex justify-evenly">
        <NavLink to={"/control-panel/products"}>products</NavLink>
        <NavLink to={"/control-panel/inventory"}>inventory</NavLink>
        <NavLink to={"/control-panel/order"}>order</NavLink>
      </ul>
      <div>AdminLayout</div>
      <Outlet></Outlet>
    </>
  );
}

export default AdminLayout;
