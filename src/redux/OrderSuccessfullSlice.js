import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orderSuccess: false,
};

const orderSuccessSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    showInvoice: (state) => {
      state.orderSuccess = true;
    },
    hideInvoice: (state) => {
      state.orderSuccess = false;
    },
  },
});

export const { showInvoice, hideInvoice } = orderSuccessSlice.actions;
export default orderSuccessSlice.reducer;
