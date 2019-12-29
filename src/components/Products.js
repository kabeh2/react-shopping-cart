import React, { useContext } from "react";

// Components
import Product from "./Product";

import ProductContext from "../contexts/ProductContext";

const Products = () => {
  const productContext = useContext(ProductContext);

  return (
    <div className="products-container">
      {productContext.products.map(product => (
        <Product
          key={product.id}
          product={product}
          addItem={productContext.addItem}
        />
      ))}
    </div>
  );
};

export default Products;
