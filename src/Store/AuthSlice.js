import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: { isAuthenticated: false },
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", true);
    },
    logOut(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export default AuthSlice;
export const AuthActions = AuthSlice.actions;
