import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "changeCurrency",
  initialState: 8,

  reducers: {
    currencyValue(state, action) {
      // eslint-disable-next-line no-unused-expressions
      state = action.payload;
      return state;
    },
  },
});

const { actions, reducer } = currencySlice;
export const { currencyValue } = actions;
export default reducer;
