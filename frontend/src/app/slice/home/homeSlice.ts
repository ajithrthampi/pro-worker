import { createSlice } from "@reduxjs/toolkit";
import { HomeInterface } from "@/app/slice/home/homeInterface.ts";

const initialHomeState: HomeInterface = {
  title: "this is a home",
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialHomeState,
  reducers: {},
});

export const homeReducer = homeSlice.reducer;
