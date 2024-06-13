import react, { useEffect } from "react";
import {Routes, Route, useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import LogRegComp from "../components/login";
import Checkout from "../pages/checkout";
import Cart from "../pages/cart";
import Category from "../pages/category";
import Product from "../pages/product";
import Home from "../pages/home";
import PageNotFound from "../pages/not-found";

function App() {

  // SCROLL TO TOP ON PAGE LOAD

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (

    <>
      <Header />

       <Routes>

        {/* Base Page  */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="/react-ecom-app" element={<Home />} />

        {/* Login / Signup Page  */}
        <Route path="login" element={<LogRegComp />} />

        {/* Product Page  */}
        <Route path="category/:category" element={<Category />} />
        <Route path="product/:id" element={<Product />} />

        {/* Cart Page  */}
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />

       </Routes>

      <Footer />
    </>
    
  );

}

export default App;
