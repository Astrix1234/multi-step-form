import { createSlice } from '@reduxjs/toolkit';

const planDetailsSlice = createSlice({
  name: 'planDetails',
  initialState: {
    plan: 'monthly',
    planName: 'Arcade',
    price: 0,
    period: 'mo',
    services: {},
  },
  reducers: {
    setPlanDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
    togglePlan: state => {
      if (state.plan === 'monthly') {
        state.plan = 'yearly';
      } else {
        state.plan = 'monthly';
      }
    },
    updateServiceDetails: (state, action) => {
      state.services = action.payload;
    },
  },
});

export const { setPlanDetails, updateServiceDetails, togglePlan } =
  planDetailsSlice.actions;
export default planDetailsSlice.reducer;
