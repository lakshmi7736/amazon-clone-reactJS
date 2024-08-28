import ProductGrid from "../ProductGrid";
import './products.css';

 const products = [
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "SIRIL",
      name: "Women's Dola Silk Floral Printed Saree With Unstitched Blouse",
      rating: 4.5,
      price: 649,
      originalPrice: 2688,
      discount: "76%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },  {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },
    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },

    {
      image: "https://m.media-amazon.com/images/I/51zTLfvpVLL.jpg",
      brand: "Sidhidata",
      name: "Women's Kanjivaram Banarasi Paithani Jacquard Silk Saree With Blouse Piece",
      rating: 4.2,
      price: 449,
      originalPrice: 1999,
      discount: "78%",
    },

    // Add more products as needed
  ];

  const ProductPage = () => {
    return (
      <div className="product-page">
        <ProductGrid products={products} />
      </div>
    );
  }
  export default ProductPage;
  
  