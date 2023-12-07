import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/Admin/AdminHeader";
function AdminLayout() {
  return (
    <div className="w-full h-[100vh] flex flex-col jus gap-8 bg-[#E8E8F4]">
      <AdminHeader />
      <main className="w-full h-full flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
