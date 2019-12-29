import { createContext } from "react";

const productContext = createContext({
  products: [],
  cart: [],
  addItem: () => {}
});

export default productContext;
