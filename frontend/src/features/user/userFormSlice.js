import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { registration, login } from '../../services/auth.config';

import { LocalUserIn, LocalUserOut } from '../../hooks/useLocalUser/useLocalUser';

const initialState = {
  first_name: '',
  last_name: '',
  middle_name: '',
  email: '',
  token: '',
  status: false
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ( user ) => {
    try {    
      const { data } =  await registration(user);
      LocalUserIn(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ( user ) => {
    try {
      const { data } = await login(user);
      return data;
    } catch ( error ) {
      console.log(error);
    }
  }
);

const userFormSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.first_name = '';
      state.last_name = '';
      state.middle_name = '';
      state.email = '';
      state.token = '';
      state.status = false;
      LocalUserOut();
    }
  },

  extraReducers : {
    [registerUser.fulfilled]: (state, action) => {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.middle_name = action.payload.middle_name;
      state.email = action.payload.email;
      state.status = true;
    },
    
    [registerUser.rejected]: (state, action) => {
      state.status = false;
    },

    [loginUser.fulfilled]: (state, action) => {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.status = true;
    },

    [loginUser.rejected]: (state, action) => {
      state.status = false;
    },

  }
})

export const { logout } = userFormSlice.actions;

export default userFormSlice.reducer;