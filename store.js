// store.js
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './src/slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here
  },
});

export default store;
