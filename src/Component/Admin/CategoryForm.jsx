import React, { useState, useEffect } from 'react';
import { createCategory, updateCategory } from '../../service/CategoryService';

const CategoryForm = ({ categoryId }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (categoryId) {
      // Load existing category details if editing
      // Fetch logic can be added here if needed
    }
  }, [categoryId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (categoryId) {
        await updateCategory(categoryId, { name });
      } else {
        await createCategory({ name });
      }
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">{categoryId ? 'Update' : 'Add'} Category</button>
    </form>
  );
};

export default CategoryForm;
