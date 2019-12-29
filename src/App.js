import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

// Contexts
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [storedValue, setValue] = useLocalStorage("cart");
  const [products] = useState(data);
  const [cart, setCart] = useState([...storedValue]);

  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]);
    setValue([...cart, item]);
  };

  const removeItem = id => {
    setCart(cart.filter(item => item.id !== id));
    setValue(cart.filter(item => item.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addItem
      }}
    >
      <CartContext.Provider value={{ cart, removeItem }}>
        <div className="App">
          <Navigation />

          {/* Routes */}
          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
