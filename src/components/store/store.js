import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "./slices/items";

const store = configureStore({
  reducer: {
    cartItems:cartItemReducer,
  },
});

export default store;
