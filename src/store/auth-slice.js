import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    userId: null,
    error: null,
    loading: false,
    loggedIn: false,
  },
  reducers: {
    error(state, action) {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
    logIn(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.loading = action.payload.loading;
      state.authRedirectPath = action.payload.path;
      state.loggedIn = action.payload.loggedIn;
      state.user = action.payload.user;
    },
    logout(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.loggedIn = action.payload.loggedIn;
      state.user = action.payload.user;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
