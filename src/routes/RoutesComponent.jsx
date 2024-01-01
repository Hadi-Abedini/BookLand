import React from "react";
import { Navigate, createBrowserRouter, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Categorie from "../pages/categorie/Categorie";
import Login from "../pages/login/Login";
import Payment from "../pages/payment/Payment";
import Product from "../pages/product/Product";
import Shipping from "../pages/shipping/Shipping";
import AdminLayout from "../pages/controlPanel/AdminLayout";
import Inventory from "../pages/controlPanel/inventory/Inventory";
import Orders from "../pages/controlPanel/orders/Orders";
import Products from "../pages/controlPanel/products/Products";
import UserLayout from "../pages/userLayout/UserLayout";
import PaymentStatus from "../pages/payment/PaymentStatus";
import { jwtDecode } from "jwt-decode";
import isTokenExpired from "../utils/isTokenExpired";


const PrivateRoute = ({ element}) => {
  const storedToken = localStorage.getItem("token");

  if (!storedToken) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decodedToken = jwtDecode(storedToken);

    const isValidToken = !isTokenExpired(decodedToken.exp);

    return isValidToken ? <React.Suspense fallback={<>...</>}>{element}</React.Suspense> : <Navigate to="/login" replace />;
  } catch (error) {
    console.error("Error decoding token:", error);
    return <Navigate to="/login" replace />;
  }
};


const routes = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<>...</>}>
            <Helmet>
              <title>home</title>
            </Helmet>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <React.Suspense fallback={<>...</>}>
            <Helmet>
              <title>cart</title>
            </Helmet>
            <Cart />
          </React.Suspense>
        ),
      },
      {
        path: "categorie/:ID?/:type",
        element: (
          <React.Suspense fallback={<>...</>}>
            <Helmet>
              <title>categorie</title>
            </Helmet>
            <Categorie />
          </React.Suspense>
        ),
      },
      {
        path: "shipping",
        element: (
          <React.Suspense fallback={<>...</>}>
             <Helmet>
              <title>shipping</title>
            </Helmet>
            <Shipping />
          </React.Suspense>
        ),
      },
      {
        path: "product/:productID",
        element: (
          <React.Suspense fallback={<>...</>}>
            <Helmet>
              <title>product</title>
            </Helmet>
            <Product />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "login",
    element: (
      <React.Suspense fallback={<>...</>}>
        <Helmet>
          <title>login</title>
        </Helmet>
        <Login />
      </React.Suspense>
    ),
  },
  {
    path: "payment",
    element: (
      <React.Suspense fallback={<>...</>}>
        <Payment />
      </React.Suspense>
    ),
  },
  {
    path: "payment-status/:status",
    element: (
      <React.Suspense fallback={<>...</>}>
        <PaymentStatus />
      </React.Suspense>
    ),
  },
  {
    path: "/control-panel",
    element: <PrivateRoute element={<AdminLayout />} />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<>...</>}>
            <Helmet>
              <title>control-panel</title>
            </Helmet>
            <Orders />
          </React.Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <React.Suspense fallback={<>...</>}>
            <Helmet>
              <title>control-panel</title>
            </Helmet>
            <Products />
          </React.Suspense>
        ),
      },
      {
        path: "inventory",
        element: (
          <React.Suspense fallback={<>...</>}>
            <Helmet>
              <title>control-panel</title>
            </Helmet>
            <Inventory />
          </React.Suspense>
        ),
      },
      {
        path: "order",
        element: (
          <React.Suspense fallback={<>...</>}>
            <Helmet>
              <title>control-panel</title>
            </Helmet>
            <Orders />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <p>not found</p>,
  },
]);

export default routes;
