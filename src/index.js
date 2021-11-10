import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider, RouteProvider } from "./Contexts";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <RouteProvider>
        <App />
      </RouteProvider>
    </CartProvider>
  </StrictMode>,
  rootElement
);
//to implement filters ,price ranging by using mirage data,or modifying data.
//price calculation and display.
//the bug while moving item from cart -> wishList and vice versa.
//next version address management.
