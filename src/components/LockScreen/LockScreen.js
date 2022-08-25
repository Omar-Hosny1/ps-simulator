import React, { useState } from "react";
import Logo from "../Images/logo.png";
function LockScreen() {
  const [start, setStart] = useState(localStorage.getItem("isStart"));
  return (
    <div className={`lock-layer ${start ? "start" : ""}`}>
      <div>
        <img
          src={Logo}
          onClick={() => {
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
