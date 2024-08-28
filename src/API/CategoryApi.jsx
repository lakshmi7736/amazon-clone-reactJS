import { api } from "./Api";

// Fetch categories with pagination
export const getCategories = (page = 0) => {
    return api.get(`/api/categories/all-categories?page=${page}`);
  };
  
  // Create a new category
  export const createCategory = (category) => {
    return api.post(`/api/categories`, category);
  };
  
  // Update an existing category by ID
  export const updateCategory = (id, category) => {
    return api.put(`/api/categories/${id}`, category);
  };
  
  // Delete a category by ID
  export const deleteCategory = (id) => {
    return api.delete(`/api/categories/${id}`);
  };