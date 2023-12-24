import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/Admin/AdminHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100,
    },
  },
});
function AdminLayout() {
  return (
    <div className="w-full h-[100vh] flex flex-col jus gap-8 bg-[#E8E8F4]">
      <AdminHeader />
      <main className="w-full h-full flex justify-center items-center">
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </main>
    </div>
  );
}

export default AdminLayout;
