import { configureStore } from "@reduxjs/toolkit";
import orderSuccessReducer from "./OrderSuccessfullSlice";

export const store = configureStore({
  reducer: {
    orderSuccessReducer: orderSuccessReducer,
  },
});
