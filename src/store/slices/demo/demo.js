import { createSlice } from "@reduxjs/toolkit";

const demoSlice = createSlice({
  name: "demo",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});
export const demoReducer = demoSlice.reducer;
