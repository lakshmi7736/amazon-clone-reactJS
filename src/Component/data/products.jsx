import React, { useEffect, useState } from 'react';
import ProductGrid from "../ProductGrid";
import './products.css';
import { api } from '../../API/Api';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    const fetchProducts = async () => {
      try {
        const response = await api.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductPage;
