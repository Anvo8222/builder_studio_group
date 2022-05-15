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
    updateItem(state, action) {
      const { _id, name } = action.payload;
      // eslint-disable-next-line no-underscore-dangle
      const index = state.items.findIndex((x) => x._id === _id);
      if (index >= 0) {
        state.cartItem[index].name = name;
      }
    },
    deleItem(state, action) {
      // eslint-disable-next-line no-underscore-dangle
      console.log("action.payload._id", action.payload._id);
      // eslint-disable-next-line no-underscore-dangle
      const idNeedRemoveInCategory = action.payload._id;
      state.items = state.items.filter(
        // eslint-disable-next-line no-underscore-dangle
        (item) => item._id !== idNeedRemoveInCategory
      );
    },
  },
});
const { actions, reducer } = itemSlice;
export const { getItem, addItem, updateItem, deleItem } = actions;
export default reducer;
