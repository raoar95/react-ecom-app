import React from "react";
import reactDom from "react-dom/client";
import App from "./app/localShopApp";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./state/context/AppContext";
import { CartContext } from "./state/context/CartContext";

const root = reactDom.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/react-ecom-app">
    <AppContext>
      <CartContext>
        <App />
      </CartContext>
    </AppContext>
  </BrowserRouter>
);
