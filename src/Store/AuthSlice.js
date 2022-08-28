import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    isAuthenticated: false,
    userName: "",
    userImage: "",
    lockOpend: false,
  },
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", true);
    },
    logOut(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated");
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setUserImage(state, action) {
      state.userImage = action.payload;
    },
    setLockOpened(state) {
      state.lockOpend = true;
    },
  },
});

export default AuthSlice;
export const AuthActions = AuthSlice.actions;
