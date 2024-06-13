import React from "react";
import reactDom from "react-dom/client";
import App from "./app/localShopApp";
import { HashRouter } from "react-router-dom";
import { AppContext } from "./state/context/AppContext";
import { CartContext } from "./state/context/CartContext";

const root = reactDom.createRoot(document.querySelector("#root"));
root.render(
  <HashRouter>
    <AppContext>
      <CartContext>
        <App />
      </CartContext>
    </AppContext>
  </HashRouter>
);
