import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Cart from "../pages/Cart";
import Login from '../pages/Login';
import Payment from "../pages/Payment";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoute;
