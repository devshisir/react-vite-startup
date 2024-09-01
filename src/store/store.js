import { configureStore } from "@reduxjs/toolkit";
import { demoReducer } from "./slices/demo/demo";

export const store = configureStore({
  reducer: {
    demo: demoReducer,
  },
  devTools: true,
});

export default store;
