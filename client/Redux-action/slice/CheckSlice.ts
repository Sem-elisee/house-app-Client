import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CheckSlice {
  isOpen: boolean;
}

const initialState: CheckSlice = {
  isOpen: false,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = !state.isOpen;
    }
  },
});

export const { open } = checkoutSlice.actions;
export default checkoutSlice.reducer;
