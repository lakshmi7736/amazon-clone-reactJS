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
  const [prime, setPrime] = useState(false);
  const [cod, setCod] = useState(false);
  const [brandFilters, setBrandFilters] = useState({});
  const [sellerFilters , setSellerFilters]= useState({});


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
      const response = await api.get(`/api/sellers/all-sellers`);
      console.log("sellers: ",response.data);
      setSellers(response.data);
    } catch (error) {
      console.error(`Error fetching sellers:`, error);
    }
  };

      // Handler function to update filters

      const handleFilter = async ({ categoryId, subcategoryId, nestedId ,madeForAmazon ,prime ,cod ,brand, seller}) => {
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

        if(prime !== undefined && prime !== null){
          filters.prime=prime;
        }
    
        if(cod !== undefined && cod !== null){
          filters.cod=cod;
        }

        if(brand !== undefined && brand !== null){
          filters.brand=brand;
        }

        if(seller !== undefined && seller !== null){
          filters.seller=seller;
        }
        await fetchProducts(filters);
    };
  

  const handleMadeForAmazonCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setMadeForAmazon(isChecked);
    handleFilter({ madeForAmazon: isChecked });
  };

  const handlePrimeCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setPrime(isChecked);
    handleFilter({ prime: isChecked });
  };

  const handleCodheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setCod(isChecked);
    handleFilter({ cod: isChecked });
  };

  const handleBrandCheckboxChange = (event, brand) => {
    const isChecked = event.target.checked;
    
    if (isChecked) {
      setBrandFilters({ [brand]: true });
      handleFilter({ brand: [brand] });
    } else {
      setBrandFilters({});
      handleFilter({ brand: [] }); 
    }
  };

  const handleSellerCheckboxChange = (event, seller) => {
    const isChecked = event.target.checked;
    
    if (isChecked) {
      setSellerFilters({ [seller]: true });
      console.log("seller id :",seller);
      handleFilter({ seller: [seller] });
    } else {
      setSellerFilters({});
      handleFilter({ seller: [] }); 
    }
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
          onChange={handleMadeForAmazonCheckboxChange}
        />
        Made for Amazon
      </label>
        </div>

        <div className="filter-section">
          <h5>Amazon Prime</h5>
          <label>
            <input type="checkbox"  checked={prime}
              onChange={handlePrimeCheckboxChange} />
            <span className="prime">prime</span>
          </label>
        </div>

      <div className="filter-section">
                 <h5>Pay On Delivery</h5>
                 <label>
                     <input type="checkbox" checked={cod} onChange={handleCodheckboxChange} />
                     Eligible for Pay On Delivery
                </label>
             </div>

             <div className="filter-section">
                <h5>Brand</h5>
                {brands.map((brand, index) => (
                  <label key={index}>
                    <input
                      type="checkbox"
                      checked={!!brandFilters[brand]} // Ensure the checkbox state is a boolean
                      onChange={(event) => handleBrandCheckboxChange(event, brand)}
                    />
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
                 {sellers.map((seller) => (
                  <label key={seller.id}>
                    <input type="checkbox"
                    checked={!!sellerFilters[seller.id]}
                      onChange={(event)=> handleSellerCheckboxChange(event, seller.id)}
                     />
                    {seller.businessName}
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
