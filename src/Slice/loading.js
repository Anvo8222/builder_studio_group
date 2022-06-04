import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: true,
  reducers: {
    isLoading(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const { actions, reducer } = loadingSlice;
export const { isLoading } = actions;
export default reducer;
