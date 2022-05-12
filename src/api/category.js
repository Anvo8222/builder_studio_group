import { createSlice } from "@reduxjs/toolkit";
import axiosClients from "./axiosClient";
import { addItem, getItem } from "../Slice/category";
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

export function editITem(item) {
  return async (dispatch) => {
    axiosClients
      .patch(catelogy, item)
      .then((response) => {
        dispatch(addItem(response));
      })
      .catch((er) => {});
  };
}

export function deleteItem(item) {
  console.log(item);

  return async (dispatch) => {
    axiosClients
      .delete(`/studio-categories/${item}`)
      .then((response) => {
      })
      .catch((er) => {});
  };
}
