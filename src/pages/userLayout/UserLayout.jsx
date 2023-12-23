import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CartContext from "../../Context/CartContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100,
    },
  },
});

function UserLayout() {
  const storedData = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(storedData || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <main>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Outlet />
          </QueryClientProvider>
        </main>
        <Footer />
      </CartContext.Provider>
    </>
  );
}

export default UserLayout;
