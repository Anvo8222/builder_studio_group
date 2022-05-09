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
  },
});
const { actions, reducer } = itemSlice;
export const { getItem } = actions;
export default reducer;
