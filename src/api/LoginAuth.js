import axiosClient from "./axiosClient";

const login = {
  loginAdmin: (params) => {
    const resource = "/auth/login";
    return axiosClient.post(resource, params).then((res) => {
      if (res) {
        localStorage.setItem("USER", JSON.stringify(res.user));
        localStorage.setItem("TOKEN", res.tokens.access.token);
        localStorage.setItem("REFRESHTOKEN", res.tokens.refresh.token);
      }
    });
  },
  logoutAdmin: (params) => {
    const resource = "/auth/logout";
    const Token = { refreshToken: params };
    return axiosClient.post(resource, Token).then((res) => {
      if (res) {
        localStorage.removeItem("USER");
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("REFRESHTOKEN");
      }
    });
  },
};

export default login;
