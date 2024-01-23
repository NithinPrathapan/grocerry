import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    saveProductData: (state, action) => {
      state.value = action.payload;
      const item = JSON.stringify(state.value);
      localStorage.setItem("product", item);
    },
    removeData: (state) => {
      state.value = null;
      localStorage.removeItem("product");
    },
  },
});
export const { saveProductData, removeData } = productSlice.actions;
export default productSlice.reducer;
