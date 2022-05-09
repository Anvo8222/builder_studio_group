import { createSlice } from "@reduxjs/toolkit";
import axiosClients from "./axiosClient";
import { getItem } from "../Slice/category";
import { baseUrl } from "../config/index";
// set up axios - simple json-server prototype config here
// fetch all items
export function fetchItems() {
  const catelogy = `${baseUrl}/studio-categories`;
  return async (dispatch) => {
    axiosClients
      .get(catelogy)
      .then((response) => {
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
