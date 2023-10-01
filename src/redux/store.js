import { configureStore } from '@reduxjs/toolkit';
import planDetailsReducer from './slice';

const store = configureStore({
  reducer: {
    planDetails: planDetailsReducer,
  },
});

export default store;
