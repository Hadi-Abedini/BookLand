import React from "react";
import { createBrowserRouter } from "react-router-dom";
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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout></UserLayout>,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<>...</>}>
            <Helmet>
              <title>home</title>
            </Helmet>
            <Home></Home>
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
            <Cart></Cart>
          </React.Suspense>
        ),
      },
      {
        path: "categorie",
        element: (
          <React.Suspense fallback={<>...</>}>
            <Helmet>
              <title>categorie</title>
            </Helmet>
            <Categorie></Categorie>
          </React.Suspense>
        ),
      },
      {
        path: "payment",
        element: (
          <React.Suspense fallback={<>...</>}>
            <Payment></Payment>
          </React.Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <React.Suspense fallback={<>...</>}>
            <Helmet>
              <title>product</title>
            </Helmet>
            <Product></Product>
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
        <Login></Login>
      </React.Suspense>
    ),
  },
  {
    path: "shipping",
    element: (
      <React.Suspense fallback={<>...</>}>
        <Shipping></Shipping>
      </React.Suspense>
    ),
  },
  {
    path: "/control-panel",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<>...</>}>
            <Helmet>
              <title>control-panel</title>
            </Helmet>
            <Orders></Orders>
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
            <Products></Products>
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
            <Inventory></Inventory>
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
            <Orders></Orders>
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
