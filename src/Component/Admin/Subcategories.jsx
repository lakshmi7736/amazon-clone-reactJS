import React, { useState, useEffect, useRef } from 'react';
import { api } from '../../API/Api';
import {
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';


const SubCategories = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newSubCategory, setNewSubCategory] = useState(''); // Ensure it's always an empty string initially
  const [selectedCategory, setSelectedCategory] = useState(''); // Ensure it's always an empty string initially
  const [page, setPage] = useState(0);
  const [categoryPage, setCategoryPage] = useState(0); // For category pagination
  const [editingSubCategory, setEditingSubCategory] = useState(null);
  const [editingName, setEditingName] = useState('');
  const [editingCategory, setEditingCategory] = useState('');
  const dropdownRef = useRef(null); // Ref for dropdown

  useEffect(() => {
    fetchSubCategories();
  }, [page]);

  useEffect(() => {
    fetchCategories();
  }, [categoryPage]);

  // Fetch subcategories
  const fetchSubCategories = async () => {
    try {
      const response = await api.get(`/api/subcategory-requests/all-sub-categories?page=${page}`);
      setSubCategories(response.data);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  // Fetch categories for the dropdown with pagination
  const fetchCategories = async () => {
    try {
      const response = await api.get(`/api/categories/all-categories?page=${categoryPage}`);
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Handle pagination for the dropdown
  const handleCategoryPageChange = (direction) => {
    if (direction === 'next') {
      setCategoryPage((prevPage) => prevPage + 1);
    } else {
      setCategoryPage((prevPage) => Math.max(prevPage - 1, 0));
    }
  };

  // Create subcategory
  const handleCreate = async () => {
    try {
      await api.post(`/api/subCategories`, {
        subCategoryName: newSubCategory,
        categoryId: { id: selectedCategory }
      });
      setNewSubCategory(''); // Reset to empty string to maintain controlled state
      setSelectedCategory(''); // Reset to empty string to maintain controlled state
      fetchSubCategories();
    } catch (error) {
      console.error('Error creating subcategory:', error);
    }
  };

  // Update subcategory
  const handleUpdate = async (id) => {
    try {
      await api.put(`/api/subCategories/${id}`, {
        subCategoryName: editingName,
        categoryId: { id: editingCategory }
      });
      setEditingSubCategory(null);
      setEditingName('');
      setEditingCategory('');
      fetchSubCategories();
    } catch (error) {
      console.error('Error updating subcategory:', error);
    }
  };

  // Delete subcategory
  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/subCategories/${id}`);
      fetchSubCategories();
    } catch (error) {
      console.error('Error deleting subcategory:', error);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Subcategories Dashboard
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={5}>
            <TextField
              fullWidth
              variant="outlined"
              value={newSubCategory}
              onChange={(e) => setNewSubCategory(e.target.value)}
              placeholder="Add new subcategory"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory || ''} // Ensure controlled input
                onChange={(e) => setSelectedCategory(e.target.value)}
                inputRef={dropdownRef}
                onClose={() => dropdownRef.current.focus()}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
                  <MenuItem>
                          <IconButton onClick={() => handleCategoryPageChange('prev')} >
                            <ArrowBackIcon />
                          </IconButton>
                          <IconButton onClick={() => handleCategoryPageChange('next')}>
                            <ArrowForwardIcon />
                          </IconButton>
                      </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={handleCreate} fullWidth>
              Save Subcategory
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Existing Subcategories
        </Typography>
        <Grid container spacing={2}>
          {subCategories.map((subCategory) => (
            <Grid item xs={12} key={subCategory.id}>
              <Paper style={{ padding: '10px' }}>
                {editingSubCategory === subCategory.id ? (
                  <Grid container alignItems="center">
                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select
                          value={editingCategory || ''} // Ensure controlled input
                          onChange={(e) => setEditingCategory(e.target.value)}
                          inputRef={dropdownRef}
                          onClose={() => dropdownRef.current.focus()}
                        >
                          {categories.map((category) => (
                            <MenuItem key={category.id} value={category.id}>
                              {category.name}
                            </MenuItem>
                            
                          ))}
                          <MenuItem>
                          <IconButton onClick={() => handleCategoryPageChange('prev')} >
                            <ArrowBackIcon />
                          </IconButton>
                          <IconButton onClick={() => handleCategoryPageChange('next')}>
                            <ArrowForwardIcon />
                          </IconButton>
                      </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <IconButton onClick={() => handleUpdate(subCategory.id)} color="primary">
                        <SaveIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setEditingSubCategory(null);
                          setEditingName('');
                          setEditingCategory('');
                        }}
                        color="secondary"
                      >
                        <CancelIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      <Typography variant="body1">
                        {subCategory.subCategoryName} - {subCategory.categoryId.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <IconButton
                        onClick={() => {
                          setEditingSubCategory(subCategory.id);
                          setEditingName(subCategory.subCategoryName);
                          setEditingCategory(subCategory.categoryId.id);
                        }}
                        color="primary"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(subCategory.id)} color="secondary">
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
        <Button
          variant="outlined"
          disabled={page <= 0}
          onClick={() => setPage(page - 1)}
          style={{ marginRight: '10px' }}
        >
          Prev
        </Button>
        <Button variant="outlined" onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </Grid>
    </Container>
  );
};

export default SubCategories;
