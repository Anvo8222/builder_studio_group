import { baseUrl } from "../config/index";
import { addProducts, getProducts, getTotalProducts } from "../Slice/products";
import axiosClients from "./axiosClient";

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
      .then((response) => {
        // console.log("response", response);
      })
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

export function fetchProducs(page) {
  return async (dispatch) => {
    axiosClients
      .get(`${products}?page=${page ? page + 1 : 1}`)
      .then((response) => {
        dispatch(getProducts(response.data));
        dispatch(getTotalProducts(response.total));
      })
      .catch((er) => {});
  };
}
