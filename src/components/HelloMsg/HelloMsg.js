import React from "react";
import { FaGamepad } from "react-icons/fa";
import { useSelector } from "react-redux";

function HelloMsg() {
  const isLockOpened = useSelector((state) => state.AuthSlice.lockOpend);
  const userName = useSelector((state) => state.AuthSlice.userName);

  return (
    <span className={isLockOpened ? `user-msg openMsg` : "user-msg"}>
      Hello {userName} <FaGamepad />
    </span>
  );
}

export default HelloMsg;
