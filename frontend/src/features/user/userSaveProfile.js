import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { LocalUser, LocalUserIn } from '../../hooks/useLocalUser/useLocalUser';

import { save } from '../../services/save.config';

const initialState = {
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  token: '',
  statusUpdate: false
};

export const saveProfile = createAsyncThunk(
  'saveUpdate/saveProfile',
  async ( user ) => {
    try {
      const { data } = await save(user);
      const { first_name, last_name, middle_name, email, id } = data;
      return { first_name, last_name, middle_name, email, id };
    } catch (error) {
      console.log(error);
    }
   
  }
)

const userSaveProfileSlice = createSlice({
  name: 'saveUpdate',
  initialState,
  reducers: {
    saveStatus: (state, action) => {
      state.statusUpdate = action.payload;
    },
  },

  extraReducers: {
    [saveProfile.fulfilled]: (state, action) => {
      state.id = action.payload.id;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.saveStatus = true;
    }
  }
  
})

export const { saveStatus } = userSaveProfileSlice.actions;

export default userSaveProfileSlice.reducer;