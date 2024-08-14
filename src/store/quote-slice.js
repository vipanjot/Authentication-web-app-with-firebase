import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quotes: [],
  },
  reducers: {
    delete(state, action) {
      state.quotes = action.payload.quotes;
      console.log(action.payload.quotes);
    },
  },
});

export const quoteActions = quoteSlice.actions;

export default quoteSlice;
