import React from "react";
import { Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PayBtn from "../../components/PayBtn/PayBtn";

function Payment() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 100,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="w-full h-[100vh] flex gap-9 justify-center items-center">
        <PayBtn />
        <Link
          to={"/payment-status/failure"}
          className="bg-red-700 py-3 px-7 rounded-lg text-white hover:bg-red-400">
          انصراف
        </Link>
      </div>
    </QueryClientProvider>
  );
}

export default Payment;
