import React from "react";
import {
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
function Header() {
  const amOrpm = new Date().getHours() > 12 ? "PM" : "AM";
  const Time = `${
    new Date().getHours() % 12
  } : ${new Date().getMinutes()} ${amOrpm}`;
  return (
    <div className="header">
      <div className="links">
        <span>Games</span>
        <span>Media</span>
      </div>
      <div className="icons">
        <AiOutlineSearch />
        <AiOutlineSetting />
        <AiOutlineUser />
        {Time}
      </div>
    </div>
  );
}

export default Header;
