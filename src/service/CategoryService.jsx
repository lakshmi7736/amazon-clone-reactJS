import { api } from "./Api";

export const getCategories = (page = 0) => {
  return api.get(`/api/categories/all-categories?page=${page}`);
};

export const createCategory = (category) => {
  return api.post(`/api/categories`, category); 
};

export const updateCategory = (id, category) => {
  return api.put(`/api/categories/${id}`, category); 
};

export const deleteCategory = (id) => {
  return api.delete(`/api/categories/${id}`); 
};
