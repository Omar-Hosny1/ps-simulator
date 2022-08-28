import React from "react";
import {
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { FaBatteryFull } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../../Store/AuthSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const logoutHandler = () => {
    dispatch(AuthActions.logOut());
  };

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
            navigate("/");
            document.location.reload();
          }}
        />
        <AiOutlineLogout className="header-icon" onClick={logoutHandler} />
        <AiOutlineSetting className="header-icon" />
        <AiOutlineUser className="header-icon" />
        {Time}
        <FaBatteryFull className="battery" />
      </div>
    </div>
  );
}

export default Header;
