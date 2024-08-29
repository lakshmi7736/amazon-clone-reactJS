import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, Paper, Grid, TextField, FormControl, InputLabel, Select, MenuItem, IconButton, Button, Checkbox, FormControlLabel, Input } from '@mui/material';
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon, Save as SaveIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { api } from '../../API/Api';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { seller } = useParams(); 
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [nestedSubCategories, setNestedSubCategories] = useState([]);
  const [error, setError] = useState('');
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    brand: '',
    prime: false,
    cod: false,
    seller:seller,
    madeForAmazon: false,
    categoryId: '',
    subCategoryId: '',
    nestedSubCategoryId: '',
    imageBlob: null
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [editingData, setEditingData] = useState({});
  const [page, setPage] = useState(0);
  const [categoryPage, setCategoryPage] = useState(0);
  const [subCategoryPage, setSubCategoryPage] = useState(0);
  const [nestedSubCategoryPage, setNestedSubCategoryPage] = useState(0);
  const imageInputRef = useRef(null);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  useEffect(() => {
    fetchCategories();
    fetchSubCategories();
    fetchNestedSubCategories();
  }, [categoryPage, subCategoryPage, nestedSubCategoryPage]);

  const fetchProducts = async () => {
    try {
      const response = await api.get(`/api/products?page=${page}&seller=${seller}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products');
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get(`/api/category-requests/all-categories?page=${categoryPage}`);
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Failed to fetch categories');
    }
  };


  const fetchSubCategories = async () => {
    try {
      const response = await api.get(`/api/subcategory-requests/all-sub-categories?page=${subCategoryPage}`);
      setSubCategories(response.data);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  const fetchNestedSubCategories = async () => {
    try {
      const response = await api.get(`/api/nested-subcategory-requests/all-nested-sub-categories?page=${nestedSubCategoryPage}`);
      setNestedSubCategories(response.data);
    } catch (error) {
      console.error('Error fetching nested subcategories:', error);
      setError('Failed to fetch nested subcategories');
    }
  };

  const handlePageChange = (type, direction) => {
    let setState;
    let stateValue;
    switch (type) {
      case 'category':
        setState = setCategoryPage;
        stateValue = categoryPage;
        break;
      case 'subCategory':
        setState = setSubCategoryPage;
        stateValue = subCategoryPage;
        break;
      case 'nestedSubCategory':
        setState = setNestedSubCategoryPage;
        stateValue = nestedSubCategoryPage;
        break;
      default:
        return;
    }

    if (direction === 'next') {
      setState(stateValue + 1);
    } else if (direction === 'prev' && stateValue > 0) {
      setState(stateValue - 1);
    }
  };


  const handleCreate = async () => {
    const formData = new FormData();
    Object.keys(newProduct).forEach((key) => {
      if (key === 'imageBlob' && newProduct[key]) {
        // Append each file to the form data
        Array.from(newProduct[key]).forEach(file => {
          formData.append('files', file);
        });
      } else {
        formData.append(key, newProduct[key]);
      }
    });
  
    try {
      await api.post('/api/products/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      fetchProducts();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleUpdate = async (id) => {
    const formData = new FormData();
    Object.keys(editingData).forEach((key) => {
      if (key === 'imageBlob' && editingData[key]) {
        formData.append('files', editingData[key]);
      } else {
        formData.append(key, editingData[key]);
      }
    });

    try {
      await api.put(`/api/products/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setEditingProduct(null);
      setEditingData({});
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Products Dashboard
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              placeholder="Product Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              placeholder="Product Description"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Price"
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              placeholder="Product Price"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Brand"
              value={newProduct.brand}
              onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
              placeholder="Product Brand"
            />
          </Grid>
          <Grid item xs={6}>
          <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={newProduct.categoryId || ''}
            onChange={(e) => setNewProduct({ ...newProduct, categoryId: e.target.value })}
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
            <MenuItem>
              <IconButton onClick={() => handlePageChange('category', 'prev')} >
                <ArrowBackIcon />
              </IconButton>
              <IconButton onClick={() => handlePageChange('category', 'next')}>
                <ArrowForwardIcon />
              </IconButton>
            </MenuItem>
          </Select>
         </FormControl>
          </Grid>
          <Grid item xs={6}>
          <FormControl fullWidth>
          <InputLabel>Sub Category</InputLabel>
          <Select
              value={newProduct.subCategoryId || ''}
              onChange={(e) => setNewProduct({ ...newProduct, subCategoryId: e.target.value })}
            >
             {subCategories.map((subCategory) => (
          <MenuItem key={subCategory.id} value={subCategory.id}>
            {subCategory.subCategoryName}
                  </MenuItem>
                ))}
            <MenuItem>
              <IconButton onClick={() => handlePageChange('subCategory', 'prev')} >
                <ArrowBackIcon />
              </IconButton>
              <IconButton onClick={() => handlePageChange('subCategory', 'next')}>
                <ArrowForwardIcon />
              </IconButton>
            </MenuItem>
          </Select>
          </FormControl>
          </Grid>
          <Grid item xs={6}>
          <FormControl fullWidth>
          <InputLabel>Nested Sub Category</InputLabel>
           <Select
              value={newProduct.nestedSubCategoryId || ''}
              onChange={(e) => setNewProduct({ ...newProduct, nestedSubCategoryId: e.target.value })}
            >
               {nestedSubCategories.map((nestedSubCategory) => (
                <MenuItem key={nestedSubCategory.id} value={nestedSubCategory.id}>
                  {nestedSubCategory.nestedSubCategoryName}
              </MenuItem>
            ))}
            <MenuItem>
              <IconButton onClick={() => handlePageChange('nestedSubCategory', 'prev')} >
                <ArrowBackIcon />
              </IconButton>
              <IconButton onClick={() => handlePageChange('nestedSubCategory', 'next')}>
                <ArrowForwardIcon />
              </IconButton>
            </MenuItem>
          </Select>
          </FormControl>
          </Grid>
          {/* Checkboxes for Prime, COD, Made for Amazon */}
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={newProduct.prime}
                  onChange={(e) => setNewProduct({ ...newProduct, prime: e.target.checked })}
                />
              }
              label="Prime"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={newProduct.cod}
                  onChange={(e) => setNewProduct({ ...newProduct, cod: e.target.checked })}
                />
              }
              label="COD Available"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={newProduct.madeForAmazon}
                  onChange={(e) => setNewProduct({ ...newProduct, madeForAmazon: e.target.checked })}
                />
              }
              label="Made for Amazon"
            />
          </Grid>
          <Grid item xs={12}>
          <Input
            type="file"
            inputRef={imageInputRef}
            onChange={(e) => setNewProduct({ ...newProduct, imageBlob: e.target.files })}
            multiple
          />
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleCreate}>
              <SaveIcon /> Create Product
            </Button>
          </Grid>
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Grid>
      </Paper>
      <Typography variant="h5" gutterBottom>
        Product List
      </Typography>
      {products.length > 0 ? (
        <Grid container spacing={1}>
        {products.map((product) => (
          <Grid item xs={12} md={6} key={product.id}>
            <Paper elevation={3} style={{ padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
              <img src={`data:image/jpeg;base64,${product.encodedImage}`} alt={product.name} style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain', marginTop: '20px' }} />
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1">{product.description}</Typography>
                <Typography variant="body2">Price: ${product.price}</Typography>
                <Typography variant="body2">Brand: {product.brand}</Typography>
                <Typography variant="body2">Prime: {product.prime ? 'Yes' : 'No'}</Typography>
                <Typography variant="body2">COD Available: {product.cod ? 'Yes' : 'No'}</Typography>
                <Typography variant="body2">Made for Amazon: {product.madeForAmazon ? 'Yes' : 'No'}</Typography>
              </div>
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <IconButton onClick={() => setEditingProduct(product)}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete(product.id)}><DeleteIcon /></IconButton>
              </div>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Grid>
      </Grid>
      ) : (
        <Typography variant="body1" align="center">
          No products you are added
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Grid>
        </Typography>
      )}
    </Container>
  );
};

export default Products;
