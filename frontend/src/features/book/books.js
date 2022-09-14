import { createSlice, createAsyncThunk, isAsyncThunkAction } from '@reduxjs/toolkit';
import { booksGet } from '../../services/book.config';

import { setBookId, getBookId } from '../../hooks/useBook/useBook';


const initialState = { 
  books: [],
  booksMark: [], 
  myBooks: [],
};

export const booksAll = createAsyncThunk(
  'book/booksAll',
  async( ) => {
    try {
      const { data } = await booksGet();
      console.log("Books", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const booksId = createAsyncThunk(
  'book/booksId',
  async (  ) => {
    try {
      const { data } = await booksGet();
      return data;
    } catch ( error ) {
      console.log(error);
    }
  }
);

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.myBooks.push(action.payload);
      setBookId(state.myBooks);
    },

    returnBook: (state, action) => {
      const bookId = getBookId();
      console.log("bookId", bookId);
      const newArrBook = (bookId.filter((id) => id !== action.payload));
      console.log("NEwArrBook", newArrBook);
      setBookId(newArrBook);

    },
  },
  extraReducers: {
    [booksAll.fulfilled]: (state, action) => {
      state.books = action.payload;
    },

    [booksAll.rejected]: (state) => {
      state.status = false;
    },

    [booksId.fulfilled]: (state, action) => {
      state.myBooks = action.payload;
    },

  }
});

export const { addBook, returnBook } = bookSlice.actions;

export default bookSlice.reducer;

