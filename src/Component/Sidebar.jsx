// import React from 'react';
// import './Sidebar.css';

// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//             <h5>Category</h5>
//             <ul>
//                 <li><a href="#electronics">Electronics</a></li>
//                 <li className="sub-category">
//                     <h5 href="#mobiles-accessories">Mobiles & Accessories</h5>
//                     <ul>
//                         <li><a href="#mobile-accessories">Mobile Accessories</a></li>
//                         <li><a href="#mobile-broadband-devices">Mobile Broadband Devices</a></li>
//                         <li><a href="#sim-cards">SIM Cards</a></li>
//                         <li><a href="#smartphones-basic-mobiles">Smartphones & Basic Mobiles</a></li>
//                         <li><a href="#smartwatches">Smartwatches</a></li>
//                     </ul>
//                 </li>
//             </ul>
            
//             <div className="filter-section">
//                 <h5>Made for Amazon Brands</h5>
//                 <label>
//                     <input type="checkbox" />
//                     Made for Amazon
//                 </label>
//             </div>

//             <div className="filter-section">
//                 <h5>Amazon Prime</h5>
//                 <label>
//                     <input type="checkbox" />
//                     <span className="prime">prime</span>
//                 </label>
//             </div>
//             <div className="filter-section">
//                 <h5>Pay On Delivery</h5>
//                 <label>
//                     <input type="checkbox" />
//                     Eligible for Pay On Delivery
//                 </label>
//             </div>

//             <div className="filter-section">
//                 <h5>Brand</h5>
//                 <label>
//                     <input type="checkbox" />
//                     Redmi
//                 </label>
//                 <label>
//                     <input type="checkbox" />
//                     Ambrane
//                 </label>
//                 <label>
//                     <input type="checkbox" />
//                     Nokia
//                 </label>
//                 <label>
//                     <input type="checkbox" />
//                     iQOO
//                 </label>
//                 <label>
//                     <input type="checkbox" />
//                     Samsung
//                 </label>
//                 <label>
//                     <input type="checkbox" />
//                     Apple
//                 </label>
//                 <label>
//                     <input type="checkbox" />
//                     SanDisk
//                 </label>
//             </div>


//             <div className="filter-section">
//                 <h5>Avg. Customer Review</h5>
//                 <div className="rating">
//                     <span>★★★★☆</span> & Up
//                 </div>
//                 <div className="rating">
//                     <span>★★★☆☆</span> & Up
//                 </div>
//                 <div className="rating">
//                     <span>★★☆☆☆</span> & Up
//                 </div>
//                 <div className="rating">
//                     <span>★☆☆☆☆</span> & Up
//                 </div>
//             </div>
//             <div className="filter-section">
//                 <h5>Price</h5>
//                 <ul>
//                     <li>Under ₹1,000</li>
//                     <li>₹1,000 - ₹5,000</li>
//                     <li>₹5,000 - ₹10,000</li>
//                     <li>₹10,000 - ₹20,000</li>
//                     <li>Over ₹20,000</li>
//                 </ul>
//             </div>

//             <div className="filter-section">
//                 <h5>Seller</h5>
//                 <label>
//                     <input type="checkbox" />
//                     Redmi
//                 </label>
//                 <label>
//                     <input type="checkbox" />
//                     Ambrane
//                 </label>
//                 <label>
//                     <input type="checkbox" />
//                     Nokia
//                 </label>
//                 <label>
//                     <input type="checkbox" />
//                     iQOO
//                 </label>
//                 <label>
//                     <input type="checkbox" />
//                     Samsung
//                 </label>
//                 <label>
//                     <input type="checkbox" />
//                     Apple
//                 </label>
//                 <label>
//                     <input type="checkbox" />
//                     SanDisk
//                 </label>
//             </div>

//         </div>
//     );
// };

// export default Sidebar;
// <span class="a-size-base a-color-base" dir="auto">₹5,000 - ₹10,000</span>

import React, { useState, useEffect } from 'react';
import { api } from '../API/Api';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [nestedSubCategories, setNestedSubCategories] = useState([]);

  // Fetch all categories
  useEffect(() => {
    api.get('/api/category-requests/all-categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => console.error("Failed to fetch categories", error));
  }, []);

  // Fetch subcategories when a category is selected
  useEffect(() => {
    if (selectedCategory) {
      api.get(`/api/subcategory-requests/${selectedCategory}`)
        .then(response => {
          setSubCategories(response.data);
        })
        .catch(error => console.error("Failed to fetch subcategories", error));
    } else {
      setSubCategories([]);
    }
  }, [selectedCategory]);

  // Fetch nested subcategories when a subcategory is selected
  useEffect(() => {
    if (selectedSubCategory) {
      api.get(`/api/nested-subcategory-requests/${selectedSubCategory}`)
        .then(response => {
          setNestedSubCategories(response.data);
        })
        .catch(error => console.error("Failed to fetch nested subcategories", error));
    } else {
      setNestedSubCategories([]);
    }
  }, [selectedSubCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // Reset subcategory selection when a new category is clicked
    setSelectedSubCategory(null);
  };

  return (
    <div className="sidebar">
      <ul>
        {categories.map(category => (
          <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
      {selectedCategory && subCategories.length > 0 && (
        <ul>
          {subCategories.map(subCategory => (
            <li key={subCategory.id} onClick={() => setSelectedSubCategory(subCategory.id)}>
              {subCategory.name}
            </li>
          ))}
        </ul>
      )}
      {selectedSubCategory && nestedSubCategories.length > 0 && (
        <ul>
          {nestedSubCategories.map(nestedSubCategory => (
            <li key={nestedSubCategory.id}>
              {nestedSubCategory.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;