/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const products = axios.create({
  baseURL: 'http://127.0.0.1:8001/api/products',
});

const allProducts = async () => {
  await products.get('/');
};
const addProduct = async (formData) => {
  await products.post('/', formData);
};
const editProduct = async (id, formData) => {
  await products.patch(`/${id}`, formData);
};
const deleteProduct = async (id) => {
  await products.delete(`/${id}`);
};

export const productService = {
  allProducts,
  addProduct,
  editProduct,
  deleteProduct,
};
