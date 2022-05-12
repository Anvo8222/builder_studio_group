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
      const itemNeedRemoveInCategory = action.payload._id;
      const indexItemNeedRemoveInCategory = state.items.findIndex(
        // eslint-disable-next-line no-underscore-dangle
        (x) => x._id === itemNeedRemoveInCategory
      );
      state.items.splice(indexItemNeedRemoveInCategory, 1);
    },
  },
});
const { actions, reducer } = itemSlice;
export const { getItem, addItem, updateItem, deleItem } = actions;
export default reducer;
