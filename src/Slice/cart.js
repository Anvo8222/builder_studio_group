import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // eslint-disable-next-line consistent-return
    addToCart(state, action) {
      const newItem = action.payload;
      const index = state.findIndex((x) => x.id === newItem.id);
      if (index < 0) {
        state.push(newItem);
      } else if (index >= 0) {
        const indexNewItem = state.findIndex((x) => x.id === newItem.id);
        state.splice(indexNewItem, 1);
      }
    },
    removeCartItem(state, action) {
      const itemNeedRemoveInCart = action.payload;
      const indexItemNeedRemoveInCart = state.findIndex(
        (x) => x.id === itemNeedRemoveInCart.id
      );
      state.splice(indexItemNeedRemoveInCart, 1);
    },
    removeCart(state, action) {
      state.splice(0, state.length);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addToCart, removeCartItem, removeCart } = actions;
export default reducer;
