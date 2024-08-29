import React, { useState } from 'react';
import './ProductGrid.css';

const ProductGrid = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Ensure products is always treated as an array
  const safeProducts = Array.isArray(products) ? products : [];

  // Logic for displaying products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = safeProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Logic for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="product-grid">
      {currentProducts.map(product => (
        <div key={product.id} className="product-item">
          <img src={`data:image/jpeg;base64,${product.encodedImage}`} alt={product.name} /> {/* Adjusted this line */}
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.averageRating}</p>
        </div>
      ))}
    </div>
      {/* Pagination */}
      <div className="pagination">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => handlePageClick(number)}
            className={number === currentPage ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
