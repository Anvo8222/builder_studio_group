import { createSlice } from "@reduxjs/toolkit";

const filterByCategorySlice = createSlice({
  name: "filterByCategory",
  initialState: {
    items: [],
  },
  reducers: {
    addId(state, action) {
      const newItem = action.payload;
      const index = state.items.findIndex((x) => x === newItem);
      if (index < 0) {
        state.items.push(newItem);
      } else if (index >= 0) {
        state.items = state.items.filter((x) => x !== newItem);
      }
    },
  },
});
const { actions, reducer } = filterByCategorySlice;
export const { addId } = actions;
export default reducer;
