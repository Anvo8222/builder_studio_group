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
  },
});
const { actions, reducer } = productReducer;
export const { getProducts, addProducts } = actions;
export default reducer;
