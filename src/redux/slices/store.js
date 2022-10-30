import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {ArticleSlice} from './articleSlice';
import {loginSlice} from './loginSlice';
const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    articles: ArticleSlice.reducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
export default store;
