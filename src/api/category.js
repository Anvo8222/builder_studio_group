import { createSlice } from "@reduxjs/toolkit";
import axiosClients from "./axiosClient";
import { categoryApi } from "../config";

const itemSlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    getItem: (state, { payload }) => {
      state = payload;
    },
  },
});
const { actions, reducer } = itemSlice;
export const { getItem } = actions;
export default reducer;

// export the selector (".items" being same as in slices/index.js's "items: something")
export const categorySelector = (state) => state.category;
// set up axios - simple json-server prototype config here
// fetch all items
export function fetchItems() {
  const catelogy = "http://localhost:5000/v1/studio-categories";
  return async (dispatch) => {
    axiosClients
      .get(catelogy)
      .then((response) => {
        console.log("response", response.data);
        dispatch(getItem(response.data));
      })
      .catch((er) => {});
  };
}

// const category = {
//   getCategory() {
//     axiosClient.get(categoryApi);
//   },
//   addCategory(data) {
//     axiosClient.post(categoryApi, {
//       name: data.name,
//     });
//   },
// };
// export const { addToCart, removeCartItem, removeCart } = actions;
// export default category;
