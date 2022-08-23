import React from "react";
import {
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
function Header() {
  const currentHours =
    new Date().getHours() % 12 < 10
      ? `0${new Date().getHours() % 12}`
      : new Date().getHours() % 12;

  const amOrpm = new Date().getHours() > 12 ? "PM" : "AM";

  const Time = `${currentHours} : ${new Date().getMinutes()} ${amOrpm}`;
  return (
    <div className="header">
      <div className="links">
        <span>Games</span>
        <span>Media</span>
      </div>
      <div className="icons">
        <AiOutlineSearch className="header-icon" />
        <AiOutlineSetting className="header-icon" />
        <AiOutlineUser className="header-icon" />
        {Time}
      </div>
    </div>
  );
}

export default Header;
