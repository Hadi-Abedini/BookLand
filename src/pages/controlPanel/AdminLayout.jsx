import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/Admin/AdminHeader";

function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <div>AdminLayout</div>
      <Outlet></Outlet>
    </>
  );
}

export default AdminLayout;
