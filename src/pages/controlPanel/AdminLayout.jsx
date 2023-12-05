import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/Admin/AdminHeader";
function AdminLayout() {
  return (
    <div className="w-full h-[100vh] bg-[#E8E8F4]">
      <AdminHeader />
      <main className="w-full h-4/5 flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
