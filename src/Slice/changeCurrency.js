import { createSlice } from "@reduxjs/toolkit";
import { BsCurrencyYen } from "react-icons/bs";

const currencySlice = createSlice({
  name: "changeCurrency",
  initialState: 8,
  // {
  //   id: 8,
  //   name: "USD",
  //   shortName: "USD",
  //   icon: BsCurrencyYen,
  //   value: 128.11,
  // }
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
