import { configureStore } from "@reduxjs/toolkit";
import orderSuccessReducer from "./OrderSuccessfullSlice";
import productReducer from "./ProductSlice";
export const store = configureStore({
  reducer: {
    orderSuccessReducer: orderSuccessReducer,
    product: productReducer,
  },
});
