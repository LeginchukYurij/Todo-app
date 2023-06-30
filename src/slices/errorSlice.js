import { createSlice } from '@reduxjs/toolkit';

const defaultMessage = 'Something went wrong';

const initialState = {
  isError: false,
  message: '',
};

const errorSlice = createSlice({
  name: 'error',
  initialState,

  reducers: {
    setError: (state, action) => {
      state.isError = action.payload.bool;
      state.message = action.payload.bool
        ? action.payload.message || defaultMessage
        : '';
    },
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
