/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },
    addProducts(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      const idProducts = action.payload._id;
      state.products = state.products.filter(
        (item) => item._id !== idProducts
      );
    },
  },
});
const { actions, reducer } = productReducer;
export const { getProducts, addProducts, removeProduct } = actions;
export default reducer;
