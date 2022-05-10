import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "category",
  initialState: {
    items: [],
  },
  reducers: {
    getItem(state, action) {
      state.items = action.payload;
    },
    addItem(state, action) {
      state.items.push(action.payload);
    },
  },
});
const { actions, reducer } = itemSlice;
export const { getItem, addItem } = actions;
export default reducer;
