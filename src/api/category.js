import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import axiosClients from "./axiosClient";
import {
  addItem,
  getItem,
  deleItem,
  updateItem,
  getTotal,
} from "../Slice/category";
import { baseUrl } from "../config/index";
// set up axios - simple json-server prototype config here
// fetch all items
const catelogy = `${baseUrl}/studio-categories`;
export function fetchItems(data) {
  return async (dispatch) => {
    axiosClients
      // eslint-disable-next-line no-unneeded-ternary
      .get(
        `${
          data
            ? `${catelogy}?page=${data?.page}&limit=${data?.limit}`
            : `${catelogy}`
        }`
      )
      .then((response) => {
        dispatch(getItem(response.data));
        dispatch(getTotal(response.total));
      })
      .catch((er) => {
        toast.error("fetchItems Error !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
}

export function postItem(data) {
  return async (dispatch) => {
    axiosClients
      .post(catelogy, data)
      .then((response) => {
        dispatch(addItem(response));
        toast.success("Created Sucessfully !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((er) => {
        toast.error("Created Error !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
}
export function patchItem(data) {
  return async (dispatch) => {
    axiosClients
      // eslint-disable-next-line no-underscore-dangle
      .patch(`${catelogy}/${data._id}`, data)
      .then((response) => {
        dispatch(updateItem(response));
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
export function deleteItem(data) {
  return async (dispatch) => {
    // eslint-disable-next-line no-underscore-dangle
    axiosClients
      // eslint-disable-next-line no-underscore-dangle
      .delete(`${catelogy}/${data._id}`)
      .then(() => {
        dispatch(deleItem(data));
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
