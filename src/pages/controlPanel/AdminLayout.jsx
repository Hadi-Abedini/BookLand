import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/Admin/AdminHeader";

function AdminLayout() {
  return (
    <div className="h-[100vh] bg-[#E8E8F4]">
      <AdminHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
