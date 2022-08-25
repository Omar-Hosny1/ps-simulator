import React from "react";
import {
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { FaBatteryFull } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Header() {
  const currentHours =
    new Date().getHours() % 12 < 10
      ? `0${new Date().getHours() % 12}`
      : new Date().getHours() % 12;

  const amOrpm = new Date().getHours() > 12 ? "PM" : "AM";

  const Time = `${currentHours} : ${
    new Date().getMinutes() < 10
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes()
  } ${amOrpm}`;
  return (
    <div className="header">
      <div className="links">
        <NavLink
          to={"/"}
          className={(navData) =>
            navData.isActive ? "navlink active" : "navlink not-active"
          }
        >
          Games
        </NavLink>
        <NavLink
          to={"/media"}
          className={(navData) =>
            navData.isActive ? "navlink active" : "navlink not-active"
          }
        >
          Media
        </NavLink>
      </div>
      <div className="icons">
        <AiOutlinePoweroff
          className="header-icon"
          onClick={() => {
            localStorage.clear();
            document.location.reload();
          }}
        />
        <AiOutlineSearch className="header-icon" />
        <AiOutlineSetting className="header-icon" />
        <AiOutlineUser className="header-icon" />
        {Time}
        <FaBatteryFull className="battery" />
      </div>
    </div>
  );
}

export default Header;
