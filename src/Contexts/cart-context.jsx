import { createContext, useContext, useReducer } from "react";
// import { products } from "../data/data";
import { CartReducer } from "../reducers/cart-reducer";
import { products } from "../data/data-faked";
export const useCart = () => {
  return useContext(CartContext);
};
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
    wishList: [],
    stateProducts: products
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
