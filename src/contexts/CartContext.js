import { createContext } from "react";

const CartContext = createContext({
  cart: [],
  removeItem: () => {}
});

export default CartContext;
