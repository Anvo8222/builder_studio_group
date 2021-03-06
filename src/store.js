import { configureStore } from "@reduxjs/toolkit";
import isShowMenuFilterSlice from "./Slice/toggleMenuFilter";
import currencyValues from "./Slice/changeCurrency";
import cartSlice from "./Slice/cart";
import itemSlice from "./Slice/category";
import productReducer from "./Slice/products";
import loadingSlice from "./Slice/loading";
import filterByCategorySlice from "./Slice/filterByCategory";

const store = configureStore({
  reducer: {
    showMenuFilterSlice: isShowMenuFilterSlice,
    changeCurrency: currencyValues,
    cart: cartSlice,
    category: itemSlice,
    products: productReducer,
    loading: loadingSlice,
    filterByCategory: filterByCategorySlice,
  },
});
export default store;
