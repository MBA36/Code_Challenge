import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ArticleSlice } from "./articleSlice";
import {  loginSlice } from "./loginSlice";
const store= configureStore({
  reducer: {
    login: loginSlice.reducer,
    articles:ArticleSlice.reducer,
  },
  
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;