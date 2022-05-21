import { createSlice } from "@reduxjs/toolkit";
import axiosClients from "./axiosClient";
import { addItem, getItem, updateItem, deleItem } from "../Slice/category";
import { baseUrl } from "../config/index";
import { addProducts, getProducts } from "../Slice/products";
// set up axios - simple json-server prototype config here
// fetch all items
const products = `${baseUrl}/studio-product`;
const uploadLogo = `${baseUrl}/upload/single`;
const uploadProducrs = `${baseUrl}/upload/multi`;

export function uploadImageLogo(image) {
  return async (dispatch) => {
    axiosClients
      .post(uploadLogo, image)
      .then((response) => {})
      .catch((er) => {});
  };
}

export function uploadImageProducts(image) {
  return async (dispatch) => {
    axiosClients
      .post(uploadProducrs, image)
      .then((response) => {})
      .catch((er) => {});
  };
}

export function createProduct(value) {
  return async (dispatch) => {
    axiosClients
      .post(products, value)
      .then((response) => {
        dispatch(addProducts(response));
      })
      .catch((er) => {});
  };
}

export function fetchProducs() {
  return async (dispatch) => {
    axiosClients
      .get(products)
      .then((response) => {
        dispatch(getProducts(response.data));
      })
      .catch((er) => {});
  };
}
