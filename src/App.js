import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import  Navbar  from "./components/Navbar";
import Products from "./pages/Products";
import Users from "./pages/Users";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
