import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getValue: (state, actions) => {
      // return (state = actions.payload);
      return (state = actions.payload.toLowerCase());
    },
  },
});

export const { getValue } = filterSlice.actions;
