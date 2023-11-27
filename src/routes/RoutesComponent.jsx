import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Categorie from "../pages/categorie/Categorie";
import Login from "../pages/login/Login";
import Payment from "../pages/payment/Payment";
import Product from "../pages/product/Product";
import Shipping from "../pages/shipping/Shipping";
import ControlPanel from "../pages/controlPanel/ControlPanel";
import Inventory from "../pages/controlPanel/inventory/Inventory";
import Orders from "../pages/controlPanel/orders/Orders";
import Products from "../pages/controlPanel/products/Products";
import UserLayout from "../pages/userLayout/UserLayout";

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout></UserLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route path="categorie" element={<Categorie></Categorie>}></Route>
          <Route path="payment" element={<Payment></Payment>}></Route>
          <Route path="/product/:id?" element={<Product></Product>}></Route>
        </Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="shipping" element={<Shipping></Shipping>}></Route>
        <Route path="control-panel" element={<ControlPanel></ControlPanel>}>
          <Route index element={<Products></Products>}></Route>
          <Route path="products" element={<Products></Products>}></Route>
          <Route path="inventory" element={<Inventory></Inventory>}></Route>
          <Route path="order" element={<Orders></Orders>}></Route>
        </Route>
        <Route path="*" element={<p>not found</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
