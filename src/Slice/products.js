/* eslint-disable no-underscore-dangle */
import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "product",
  initialState: {
    products: [],
    total: 0,
    productId: {},
  },
  reducers: {
    getTotalProducts(state, action) {
      state.total = action.payload;
    },
    getProducts(state, action) {
      state.products = action.payload;
    },
    addProducts(state, action) {
      state.products.push(action.payload);
    },
    getProductId(state, action) {
      state.productId = action.payload;
    },
    updateProductById(state, action) {
      const { _id } = action.payload;
      const index = state.products.findIndex((x) => x._id === _id);
      state.products[index] = action.payload;
    },
    deleteProductById(state, action) {
      const id = action.payload;
      const index = state.products.findIndex((x) => x._id === id);
      state.products.splice(index, 1);
    },
  },
});
const { actions, reducer } = productReducer;
export const {
  getProducts,
  addProducts,
  getProductId,
  updateProductById,
  deleteProductById,
  getTotalProducts,
} = actions;
export default reducer;
