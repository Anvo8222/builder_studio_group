import { ToastContainer, toast } from 'react-toastify';
import { baseUrl } from '../config/index';
import { addProducts, getProducts, getProductId, updateProductById, deleteProductById } from '../Slice/products';
import axiosClients from './axiosClient';

const products = `${baseUrl}/studio-product`;
const uploadLogo = `${baseUrl}/upload/single`;
const uploadProducrs = `${baseUrl}/upload/multi`;

export function uploadImageLogo(image) {
  return async (dispatch) => {
    axiosClients
      .post(uploadLogo, image)
      .then((response) => { })
      .catch((er) => { });
  };
}

export function uploadImageProducts(image) {
  return async (dispatch) => {
    axiosClients
      .post(uploadProducrs, image)
      .then((response) => {
        // console.log("response", response);
      })
      .catch((er) => { });
  };
}

export function createProduct(value) {
  return async (dispatch) => {
    axiosClients
      .post(products, value)
      .then((response) => {
        dispatch(addProducts(response));
        toast.success('Created Sucessfully !', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((er) => { });
  };
}

export function fetchProducs() {
  return async (dispatch) => {
    axiosClients
      .get(products)
      .then((response) => {
        dispatch(getProducts(response.data));
      })
      .catch((er) => { });
  };
}

export function fetchProductId(id) {
  return async (dispatch) => {
    if (id !== null) {
      axiosClients
        .get(`${products}/${id}`)
        .then((response) => {
          dispatch(getProductId(response));
        })
        .catch((er) => { });
    } else {
      dispatch(getProductId({}));
    }
  };
}

export function updateProductId(value) {
  return async (dispatch) => {
    axiosClients
      // eslint-disable-next-line no-underscore-dangle
      .patch(`${products}/${value._id}`, value)
      .then((response) => {
        dispatch(updateProductById(response));
        toast.success("Updated Sucessfully !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((er) => {
        toast.error("Updated Error !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
}

export function deleteProductId(id) {
  return async (dispatch) => {
    axiosClients
      // eslint-disable-next-line no-underscore-dangle
      .delete(`${products}/${id}`)
      .then(() => {
        dispatch(deleteProductById(id));
        toast.success("Delete Sucessfully !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((er) => {
        toast.error("Delete Error !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
}
