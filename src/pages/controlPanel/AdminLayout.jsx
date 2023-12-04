import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/Admin/AdminHeader";

function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
