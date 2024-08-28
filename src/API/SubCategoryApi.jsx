import { api } from "./Api";

// Fetch sub-categories with pagination
export const getSubCategories = (page = 0) => {
    return api.get(`/api/subCategories/all-categories?page=${page}`);
  };
  
  // Create a new sub-categories
  export const createSubCategory = (category) => {
    return api.post(`/api/subCategories`, category);
  };
  
  // Update an existing sub-categories by ID
  export const updateSubCategory = (id, category) => {
    return api.put(`/api/subCategories/${id}`, category);
  };
  
  // Delete a sub-categories by ID
  export const deleteSubCategory = (id) => {
    return api.delete(`/api/subCategories/${id}`);
  };