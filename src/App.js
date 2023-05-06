import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
// Components
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
// Pages
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          {/* Home Routes */}
          <Route path="/" element={<Home />}></Route>

          {/* Product Routes */}
          <Route path="/products" element={<Products />}></Route>

          {/* Contact Us Routes */}
          <Route path="/contact-us" element={<ContactUs />}></Route>

          {/* User Routes */}
          <Route path="/login" element={<Login />}></Route>

          {/* Cart Routes */}
          <Route path="/checkout" element={<Cart />}></Route>

        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
