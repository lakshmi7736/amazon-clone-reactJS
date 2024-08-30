import React, { useState, useEffect } from 'react';
import { api } from '../../API/Api';
import { Container, Grid, Button, TextField, Typography, Paper, IconButton, Divider } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Save as SaveIcon, Cancel as CancelIcon } from '@mui/icons-material';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [page, setPage] = useState(0);
  const [editingCategory, setEditingCategory] = useState(null); 
  const [editingName, setEditingName] = useState('');

  useEffect(() => {
    fetchCategories();
  }, [page]);

  const fetchCategories = async () => {
    try {
      const response = await api.get(`/api/category-requests/all-categories?page=${page}`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCreate = async () => {
    try {
      await api.post(`/api/admin/categories`, { name: newCategory });
      setNewCategory('');
      fetchCategories();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await api.put(`/api/admin/categories/${id}`, { name: editingName });
      setEditingCategory(null);
      setEditingName('');
      fetchCategories();
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/admin/categories/${id}`);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Categories Dashboard
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={8}>
            <TextField
              fullWidth
              variant="outlined"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Add new category"
            />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="primary" onClick={handleCreate} fullWidth>
              Save Category
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Existing Categories
        </Typography>
        <Divider style={{ marginBottom: '10px' }} />
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs={12} key={category.id}>
              <Paper style={{ padding: '10px' }}>
                {editingCategory === category.id ? (
                  <Grid container alignItems="center">
                    <Grid item xs={8}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <IconButton onClick={() => handleUpdate(category.id)} color="primary">
                        <SaveIcon />
                      </IconButton>
                      <IconButton onClick={() => { setEditingCategory(null); setEditingName(''); }} color="secondary">
                        <CancelIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      <Typography variant="body1">{category.name}</Typography>
                    </Grid>
                    <Grid item>
                      <IconButton onClick={() => { setEditingCategory(category.id); setEditingName(category.name); }} color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(category.id)} color="secondary">
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
        <Button variant="outlined" disabled={page <= 0} onClick={() => setPage(page - 1)} style={{ marginRight: '10px' }}>
          Prev
        </Button>
        <Button variant="outlined" onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </Grid>
    </Container>
  );
};

export default Categories;
