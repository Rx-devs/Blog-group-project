import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../redux/slices/blogSlice';

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});
