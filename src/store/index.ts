// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
