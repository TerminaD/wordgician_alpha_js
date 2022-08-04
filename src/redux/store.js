import { configureStore } from '@reduxjs/toolkit';

import registerReducer from './slices/registerSlice';

// This file lists all variables in Redux's store

export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
})
