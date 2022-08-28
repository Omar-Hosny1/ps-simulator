import React, { useState } from "react";
import Logo from "../Images/logo.png";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../Store/AuthSlice";
function LockScreen() {
  const dispatch = useDispatch();
  const [start, setStart] = useState(localStorage.getItem("isStart"));
  return (
    <div className={`lock-layer ${start ? "start" : ""}`}>
      <div>
        <img
          src={Logo}
          onClick={() => {
            dispatch(AuthActions.setLockOpened());
            localStorage.setItem("isStart", true);
            setStart(localStorage.getItem("isStart"));
          }}
        />
        <span>Press Any button to start</span>
      </div>
    </div>
  );
}

export default LockScreen;
