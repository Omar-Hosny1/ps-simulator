import React from "react";
import {
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { FaBatteryFull } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../../Store/AuthSlice";

function Header() {
  const isAuthenticated = useSelector(
    (state) => state.AuthSlice.isAuthenticated
  );
  const userImage = useSelector((state) => state.AuthSlice.userImage);
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
    navigate("/");
    dispatch(AuthActions.logOut());
    localStorage.removeItem("isStart");
    document.location.reload();
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
            localStorage.removeItem("isStart");
            navigate("/");
            document.location.reload();
          }}
        />
        <AiOutlineLogout className="header-icon" onClick={logoutHandler} />
        <AiOutlineSetting className="header-icon" />
        {/* {isAuthenticated && <img src={userImage} />} */}
        <AiOutlineUser className="header-icon" />
        {Time}
        <FaBatteryFull className="battery" />
      </div>
    </div>
  );
}

export default Header;
