import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer, tasksReducer } from './reducer';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
