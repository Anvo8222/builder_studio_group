import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import isShowMenuFilterSlice from "./Slice/toggleMenuFilter";
import currencyValues from "./Slice/changeCurrency";
import cartSlice from "./Slice/cart";
import itemSlice from "./Slice/category";

const store = configureStore({
  reducer: {
    showMenuFilterSlice: isShowMenuFilterSlice,
    changeCurrency: currencyValues,
    cart: cartSlice,
    category: itemSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
