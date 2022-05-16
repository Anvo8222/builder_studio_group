import { createSlice } from "@reduxjs/toolkit";
import axiosClients from "./axiosClient";
import { addItem, getItem, deleItem, updateItem } from "../Slice/category";
import { baseUrl } from "../config/index";
// set up axios - simple json-server prototype config here
// fetch all items
const catelogy = `${baseUrl}/studio-categories`;
export function fetchItems() {
  return async (dispatch) => {
    axiosClients
      .get(catelogy)
      .then((response) => {
        dispatch(getItem(response.data));
      })
      .catch((er) => {});
  };
}

export function postItem(data) {
  return async (dispatch) => {
    axiosClients
      .post(catelogy, data)
      .then((response) => {
        dispatch(addItem(response));
      })
      .catch((er) => {});
  };
}
export function patchItem(data) {
  console.log(data);
  return async (dispatch) => {
    axiosClients
      // eslint-disable-next-line no-underscore-dangle
      .patch(`${catelogy}/${data._id}`, data)
      .then((response) => {
        dispatch(updateItem(response));
      })
      .catch((er) => {});
  };
}
export function deleteItem(data) {
  return async (dispatch) => {
    // eslint-disable-next-line no-underscore-dangle
    axiosClients
      // eslint-disable-next-line no-underscore-dangle
      .delete(`${catelogy}/${data._id}`)
      .then(() => {
        dispatch(deleItem(data));
      })
      .catch((er) => {});
  };
}
