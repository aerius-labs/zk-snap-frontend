import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    address: null,
    disabledProposals: [],
  },
  reducers: {
    setAccountAddress: (state, action) => {
      state.address = action.payload;
    },
    setDisabledProposals: (state, action) => {
      state.disabledProposals = action.payload;
    },
  },
});

export const { setAccountAddress } = accountSlice.actions;
export const selectAccountAddress = (state:any) => state.account.address;
export const { setDisabledProposals } = accountSlice.actions;
export const selectDisabledProposals = (state:any) => state.account.disabledProposals;

export default accountSlice.reducer;
