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

const NestedSubCategories = () => {
  const [nestedSubCategories, setNestedSubCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [newNestedSubCategory, setNewNestedSubCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [page, setPage] = useState(0);
  const [subCategoryPage, setSubCategoryPage] = useState(0);
  const [editingNestedSubCategory, setEditingNestedSubCategory] = useState(null);
  const [editingName, setEditingName] = useState('');
  const [editingSubCategory, setEditingSubCategory] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchNestedSubCategories();
  }, [page]);

  useEffect(() => {
    fetchSubCategories();
  }, [subCategoryPage]);

  const handleCategoryPageChange = (direction) => {
    if (direction === 'next') {
      setSubCategoryPage((prevPage) => prevPage + 1);
    } else {
      setSubCategoryPage((prevPage) => Math.max(prevPage - 1, 0));
    }
  };

  const fetchNestedSubCategories = async () => {
    try {
      const response = await api.get(`/api/nested-subcategory-requests/all-nested-sub-categories?page=${page}`);
      setNestedSubCategories(response.data);
    } catch (error) {
      console.error('Error fetching nested subcategories:', error);
    }
  };

  const fetchSubCategories = async () => {
    try {
      const response = await api.get(`/api/subCategories/all-sub-categories?page=${subCategoryPage}`);
      setSubCategories(response.data);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  const handleCreate = async () => {
    try {
      await api.post(`/api/nestedSubCategories`, {
        nestedSubCategoryName: newNestedSubCategory,
        subCategoryId: { id: selectedSubCategory }
      });
      setNewNestedSubCategory('');
      fetchNestedSubCategories();
    } catch (error) {
      console.error('Error creating nested subcategory:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await api.put(`/api/nestedSubCategories/${id}`, {
        nestedSubCategoryName: editingName,
        subCategoryId: { id: editingSubCategory }
      });
      setEditingNestedSubCategory(null);
      setEditingName('');
      fetchNestedSubCategories();
    } catch (error) {
      console.error('Error updating nested subcategory:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/nestedSubCategories/${id}`);
      fetchNestedSubCategories();
    } catch (error) {
      console.error('Error deleting nested subcategory:', error);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Nested Subcategories Dashboard
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={5}>
            <TextField
              fullWidth
              variant="outlined"
              value={newNestedSubCategory}
              onChange={(e) => setNewNestedSubCategory(e.target.value)}
              placeholder="Add new nested subcategory"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel>Subcategory</InputLabel>
              <Select
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                inputRef={dropdownRef}
                onClose={() => dropdownRef.current.focus()}
              >
                {subCategories.map((subCategory) => (
                  <MenuItem key={subCategory.id} value={subCategory.id}>
                    {subCategory.subCategoryName}
                  </MenuItem>
                ))}
                <MenuItem>
                  <IconButton onClick={() => handleCategoryPageChange('prev')} disabled={subCategoryPage === 0}>
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
              Save Nested Subcategory
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Existing Nested Subcategories
        </Typography>
        <Grid container spacing={2}>
          {nestedSubCategories.map((nestedSubCategory) => (
            <Grid item xs={12} key={nestedSubCategory.id}>
              <Paper style={{ padding: '10px' }}>
                {editingNestedSubCategory === nestedSubCategory.id ? (
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
                        <InputLabel>Subcategory</InputLabel>
                        <Select
                          value={editingSubCategory}
                          onChange={(e) => setEditingSubCategory(e.target.value)}
                        >
                          {subCategories.map((subCategory) => (
                            <MenuItem key={subCategory.id} value={subCategory.id}>
                              {subCategory.subCategoryName}
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
                      <IconButton onClick={() => handleUpdate(nestedSubCategory.id)} color="primary">
                        <SaveIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setEditingNestedSubCategory(null);
                          setEditingName('');
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
                        {nestedSubCategory.nestedSubCategoryName} - {nestedSubCategory.subCategoryId.subCategoryName}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <IconButton
                        onClick={() => {
                          setEditingNestedSubCategory(nestedSubCategory.id);
                          setEditingName(nestedSubCategory.nestedSubCategoryName);
                          setEditingSubCategory(nestedSubCategory.subCategoryId.id);
                        }}
                        color="primary"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(nestedSubCategory.id)} color="secondary">
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

export default NestedSubCategories;
