import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './loaderSlice';
import errorReducer from './errorSlice';
import tasksReducer from './tasksSlice';

export default configureStore({
  reducer: { tasks: tasksReducer, loader: loaderReducer, error: errorReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
