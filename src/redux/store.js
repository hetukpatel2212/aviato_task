// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import petReducer from './slices/petSlice';

const store = configureStore({
  reducer: {
    pets: petReducer,
  },
});

export default store;
