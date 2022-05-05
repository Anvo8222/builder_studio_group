/* eslint-disable prefer-arrow-callback */
import axiosClient from "./axiosClient";
import { userApi } from "../config";

const user = {
  getUser(data) {
    return (
      axiosClient
        .post(`${userApi}/login`, {
          email: data.email,
          password: data.password,
        })
        // eslint-disable-next-line prefer-arrow-callback
        // eslint-disable-next-line func-names
        .then(function (response) {
          window.localStorage.setItem(
            "userToken",
            response.data.tokens.access.token
          );
        })
        // eslint-disable-next-line func-names
        .catch(function (error) {})
    );
  },
};
export default user;
