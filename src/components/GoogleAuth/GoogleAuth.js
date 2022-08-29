import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AiOutlinePlus, AiOutlineLogin } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "../../Store/AuthSlice";
import Image from "../Images/bluredBa.png";
import app from "../../firebase/firebase";

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
      .then((res) => {
        dispatch(AuthActions.logIn());
        dispatch(AuthActions.setUserName(res.user.displayName));
        dispatch(AuthActions.setUserImage(res.user.photoURL));
      })
      .catch((err) => alert(err.message));
  };

  const style = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    zIndex: "100",
    background: `url(${Image})`,
    backgroundSize: "cover",
  };
  return (
    <div className="login-page" style={style}>
      <div className="login-page-container">
        <AiOutlinePlus className="login-btn" onClick={loginHandler} />
        <span>NEW USER</span>
      </div>
    </div>
  );
}

export default GoogleAuth;
