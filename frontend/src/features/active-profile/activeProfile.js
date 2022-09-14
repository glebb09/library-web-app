import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeProfile: 'open',
  activeBook: 'close',
  activeSettings: 'close'
}

const activeProfileSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    profile: (state, action) => {
      state.activeProfile = action.payload;
      state.activeBook = 'close';
      state.activeSettings = 'close';
    },

    book: (state, action) => {
      state.activeProfile = 'close';
      state.activeBook = action.payload;
      state.activeSettings = 'close';
    },

    settings: (state, action) => {
      state.activeProfile = 'close';
      state.activeBook = 'close';
      state.activeSettings = action.payload;
    },

  }
});

export const { profile, book, settings} = activeProfileSlice.actions;

export default activeProfileSlice.reducer;