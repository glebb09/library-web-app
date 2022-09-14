import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import formRegisterReducer from './user/userFormSlice';
import saveUpdateReducer from './user/userSaveProfile';
import activeProfileReducer from './active-profile/activeProfile';
import booksReducer from './book/books';

export const store = configureStore({
  reducer: {
    register: formRegisterReducer,
    updateSelf: saveUpdateReducer,
    active: activeProfileReducer,
    books: booksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
