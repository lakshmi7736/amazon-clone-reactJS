import React, { useState, useEffect } from 'react';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { api } from '../API/Api';
import './Sidebar.css';
import ProductGrid from './ProductGrid';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [openCategories, setOpenCategories] = useState({});
  const [subcategories, setSubcategories] = useState({});
  const [nestedSubcategories, setNestedSubcategories] = useState({});
  const [brands, setBrands]=useState([]);
  const [sellers, setSellers]= useState([]);
  const [products, setProducts] = useState([]);
  const [madeForAmazon, setMadeForAmazon] = useState(false);

  useEffect(() => {
    
    fetchCategories();
    fetchProducts();
    fetchBrands();
    fetchSellers();
  }, []);


   // Fetch data from the backend
   const fetchProducts = async (filters) => {
    try {
      // Construct query parameters from filters
      const params = new URLSearchParams(filters).toString();
  
      // Fetch products with query parameters
      const response = await api.get(`/api/products?${params}`);
      setProducts(response.data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get('/api/category-requests/all-categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }

  };
  const toggleCategory = async (categoryId) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  
    if (!subcategories[categoryId]) {
      fetchSubcategories(categoryId);
    }
  
    // Fetch products when the category is expanded
    if (!openCategories[categoryId]) {
      handleFilter({categoryId});
    }
  };
  

  const fetchSubcategories = async (categoryId) => {
    try {
      const response = await api.get(`/api/subcategory-requests/${categoryId}`);
      setSubcategories((prev) => ({
        ...prev,
        [categoryId]: response.data,
      }));
    } catch (error) {
      console.error(`Error fetching subcategories for category ${categoryId}:`, error);
    }
  };

  const toggleSubcategory = async (categoryId, subcategoryId) => {
    setOpenCategories((prev) => ({
      ...prev,
      [subcategoryId]: !prev[subcategoryId],
    }));

    if (!nestedSubcategories[subcategoryId]) {
      fetchNestedSubcategories(subcategoryId);
    }

     // Fetch products when the sub-category is expanded
     if (!openCategories[subcategoryId]) {
      handleFilter({subcategoryId});

    }
  };

  const fetchNestedSubcategories = async (subcategoryId) => {
    try {
      const response = await api.get(`/api/nested-subcategory-requests/${subcategoryId}`);
      setNestedSubcategories((prev) => ({
        ...prev,
        [subcategoryId]: response.data,
      }));
    } catch (error) {
      console.error(`Error fetching nested subcategories for subcategory ${subcategoryId}:`, error);
    }
  };

  const handleNestedFilter = (nestedId )=>{
    try{
      handleFilter({nestedId});
    } catch (error) {
      console.error(`Error fetching nested subcategories for subcategory ${subcategoryId}:`, error);
    }
  };

    // Handler function to update filters

    const handleFilter = async ({ categoryId, subcategoryId, nestedId ,madeForAmazon }) => {
      const filters = {};
  
      if (categoryId !== undefined && categoryId !== null) {
          filters.categoryId = categoryId;
      }
      
      if (subcategoryId !== undefined && subcategoryId !== null) {
          filters.subcategoryId = subcategoryId;
      }
      
      if (nestedId !== undefined && nestedId !== null) {
          filters.nestedSubCategoryId = nestedId;
      }
      if(madeForAmazon !== undefined && madeForAmazon !== null){
        filters.madeForAmazon=madeForAmazon;
      }
  
      await fetchProducts(filters);
  };


  const fetchBrands = async () => {
    try {
      const response = await api.get(`/api/products/all-brands`);
      setBrands(response.data);
    } catch (error) {
      console.error(`Error fetching brands:`, error);
    }
  };

  const fetchSellers = async () => {
    try {
      const response = await api.get(`/api/products/all-sellers`);
      setSellers(response.data);
    } catch (error) {
      console.error(`Error fetching sellers:`, error);
    }
  };

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setMadeForAmazon(isChecked);
    handleFilter({ madeForAmazon: isChecked });
  };
  
  return (
    <>
    <div className="sidebar">
        <h5>Category</h5>
      <List component="nav" aria-labelledby="nested-list-subheader">
        {categories.map((category) => (
          <div key={category.id}>
            <ListItemButton onClick={() => toggleCategory(category.id)}>
              <ListItemText primary={category.name} />
              {openCategories[category.id] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openCategories[category.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {(subcategories[category.id] || []).map((subcategory) => (
                  <div key={subcategory.id}>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => toggleSubcategory(category.id, subcategory.id)}>
                      <ListItemText primary={subcategory.subCategoryName} />
                      {openCategories[subcategory.id] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openCategories[subcategory.id]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {(nestedSubcategories[subcategory.id] || []).map((nested) => (
                          <ListItemButton key={nested.id}  sx={{ pl: 8 }} onClick={() => handleNestedFilter(nested.id)}>
                            <ListItemText primary={nested.nestedSubCategoryName} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </div>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>

      {/* Filters */}
      <div className="filter-section">
        <h5>Made for Amazon Brands</h5>
        <label>
        <input
          type="checkbox"
          checked={madeForAmazon}
          onChange={handleCheckboxChange}
        />
        Made for Amazon
      </label>
      </div>

      <div className="filter-section">
        <h5>Amazon Prime</h5>
        <label>
          <input type="checkbox" />
          <span className="prime">prime</span>
        </label>
      </div>

      <div className="filter-section">
                 <h5>Pay On Delivery</h5>
                 <label>
                     <input type="checkbox" />
                     Eligible for Pay On Delivery
                </label>
             </div>

             <div className="filter-section">
                 <h5>Brand</h5>
                 {brands.map((brand, index) => (
                  <label key={index}>
                    <input type="checkbox" />
                    {brand}
                  </label>
                ))}
             </div>


             <div className="filter-section">
                 <h5>Avg. Customer Review</h5>
                 <div className="rating">
                     <span>★★★★☆</span> & Up
                 </div>
               <div className="rating">
                    <span>★★★☆☆</span> & Up
                 </div>
                 <div className="rating">
                     <span>★★☆☆☆</span> & Up
                 </div>
                <div className="rating">
                  <span>★☆☆☆☆</span> & Up
                 </div>
            </div>
             <div className="filter-section">
                 <h5>Price</h5>
                <ul>
                     <li>Under ₹1,000</li>
                     <li>₹1,000 - ₹5,000</li>
                    <li>₹5,000 - ₹10,000</li>
                    <li>₹10,000 - ₹20,000</li>
                     <li>Over ₹20,000</li>
                </ul>
             </div>

             <div className="filter-section">
                 <h5>Seller</h5>
                 {sellers.map((seller, index) => (
                  <label key={index}>
                    <input type="checkbox" />
                    {seller}
                  </label>
                ))}
             </div>
         </div>
         <div className="product-page">
              <ProductGrid products={products} />
            </div>
  </>
  );
};

export default Sidebar;
