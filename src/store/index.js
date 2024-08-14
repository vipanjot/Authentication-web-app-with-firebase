import { configureStore } from "@reduxjs/toolkit";

// import uiSlice from './ui-slice';

import authSlice from "./auth-slice";
import quoteSlice from "./quote-slice";
const store = configureStore({
  reducer: { auth: authSlice.reducer, quotes: quoteSlice.reducer },
});

export default store;
