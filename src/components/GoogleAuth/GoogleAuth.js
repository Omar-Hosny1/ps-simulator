import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import app from "../../firebase/firebase";
import { AuthActions } from "../../Store/AuthSlice";
function GoogleAuth() {
  //project-756142748783
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.AuthSlice.isAuthenticated
  );
  const auth = getAuth();
  let googleProvider = new GoogleAuthProvider();
  const loginHandler = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => dispatch(AuthActions.logIn()))
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login-page">
      <div className="login-page-container">
        <AiOutlinePlus className="login-btn" onClick={loginHandler} />
        <span>NEW USER</span>
      </div>
    </div>
  );
}

export default GoogleAuth;
