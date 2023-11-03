import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import accountReducer from './slice';

export const makeStore = () =>
  configureStore({
    reducer: {
      account: accountReducer, // Add the account reducer
    },
  });

export const wrapper = createWrapper(makeStore);
