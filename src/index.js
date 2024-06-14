import React from "react";
import ReactDom from "react-dom/client";
import App from "./app/localShopApp";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./state/context/AppContext";
import { CartContext } from "./state/context/CartContext";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/react-ecom-app">
    <AppContext>
      <CartContext>
        <App />
      </CartContext>
    </AppContext>
  </BrowserRouter>
);
