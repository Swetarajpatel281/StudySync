import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

const courseDetailsSlice = createSlice({
  name: 'courseDetails',
  initialState,
  reducers: {
    passValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { passValue } = courseDetailsSlice.actions;

export default courseDetailsSlice.reducer;
