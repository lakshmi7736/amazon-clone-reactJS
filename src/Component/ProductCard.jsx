import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <p className="product-brand">{product.brand}</p>
        <p className="product-name">{product.name}</p>
        <div className="product-rating">
          <StarIcon className="rating-star" />
          <span>{product.rating}</span>
        </div>
        <div className="product-price">
          <span className="price">{`₹${product.price}`}</span>
          <span className="original-price">{`M.R.P: ₹${product.originalPrice}`}</span>
          <span className="discount">{`(${product.discount} off)`}</span>
        </div>
        <p className="delivery">FREE Delivery by Amazon</p>
      </div>
    </div>
  );
};

export default ProductCard;
