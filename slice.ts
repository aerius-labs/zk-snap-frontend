import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    address: null,
  },
  reducers: {
    setAccountAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { setAccountAddress } = accountSlice.actions;
export const selectAccountAddress = (state:any) => state.account.address;
export default accountSlice.reducer;
