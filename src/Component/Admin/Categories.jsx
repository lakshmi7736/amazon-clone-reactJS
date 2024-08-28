import React, { useState, useEffect } from 'react';
import { api } from '../../API/Api';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [page, setPage] = useState(0);
    //Update category
  const [editingCategory, setEditingCategory] = useState(null); 
  const [editingName, setEditingName] = useState('');

  // Fetch categories
  useEffect(() => {
    fetchCategories();
  }, [page]);

  const fetchCategories = async () => {
    try {
      const response = await api.get(`/api/categories/all-categories?page=${page}`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Create category
  const handleCreate = async () => {
    try {
      await api.post(`/api/categories`, { name: newCategory });
      setNewCategory('');
      fetchCategories(); // Refresh list
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };


    // Update category
    const handleUpdate = async (id) => {
        try {
        await api.put(`/api/categories/${id}`, { name: editingName });
        setEditingCategory(null); // Reset editing state
        setEditingName(''); // Reset editing name
        fetchCategories(); // Refresh list
        } catch (error) {
        console.error("Error updating category:", error);
        }
    };

  // Delete category
  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/categories/${id}`);
      fetchCategories(); // Refresh list
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="Add new category"
      />
      <button onClick={handleCreate}>Save Category</button>

      <ul>
      {categories.map((category) => (
  <li key={category.id}>
    {editingCategory === category.id ? (
      <>
        <input
          type="text"
          value={editingName}
          onChange={(e) => setEditingName(e.target.value)}
        />
        <button onClick={() => handleUpdate(category.id)}>Update</button>
        <button onClick={() => { setEditingCategory(null); setEditingName(''); }}>Cancel</button>
      </>
    ) : (
      <>
        {category.name} 
        <button onClick={() => { setEditingCategory(category.id); setEditingName(category.name); }}>Edit</button>
        <button onClick={() => handleDelete(category.id)}>Delete</button>
      </>
    )}
  </li>
))}
      </ul>

      <div style={{ textAlign: 'center' }}>
        <button disabled={page <= 0} onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Categories;