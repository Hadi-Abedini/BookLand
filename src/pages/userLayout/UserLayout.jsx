import React from "react";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}

export default UserLayout;
