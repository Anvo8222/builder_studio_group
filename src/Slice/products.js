import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "product",
  initialState: {
    products: [],
    total: 0,
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
  },
});
const { actions, reducer } = productReducer;
export const { getProducts, addProducts, getTotalProducts } = actions;
export default reducer;
