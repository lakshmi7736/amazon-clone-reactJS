import React from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
