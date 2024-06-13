import React from "react";
import reactDom from "react-dom/client";
import App from "./app/localShopApp";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./state/context/AppContext";
import { CartContext } from "./state/context/CartContext";

const root = reactDom.createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter >
    <AppContext>
      <CartContext>
        <App />
      </CartContext>
    </AppContext>
  </BrowserRouter>
);
