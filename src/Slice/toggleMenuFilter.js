import { createSlice } from "@reduxjs/toolkit";

const menuFilterSlice = createSlice({
  name: "showMenuFilterSlice",
  initialState: false,
  reducers: {
    isShowMenuFilter(state, action) {
      // eslint-disable-next-line no-unused-expressions
      state = action.payload;
      return state;
    },
  },
});

const { actions, reducer } = menuFilterSlice;
export const { isShowMenuFilter } = actions;
export default reducer;
