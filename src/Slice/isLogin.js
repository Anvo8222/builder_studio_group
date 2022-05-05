import { createSlice } from "@reduxjs/toolkit";

const isLoginSlice = createSlice({
  name: "isLogin",
  initialState: false,
  reducers: {
    // eslint-disable-next-line consistent-return
    isLogin(state, action) {
      state = action.payload;
    },
  },
});

const { actions, reducer } = isLoginSlice;
export const { isLogin } = actions;
export default reducer;
