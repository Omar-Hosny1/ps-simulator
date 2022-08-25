import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GameActions } from "../../Store/GameSlice";
import { useNavigate, Link } from "react-router-dom";
function Poster(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dispatchData = () => {
    dispatch(GameActions.updateData(props));
    setTimeout(() => {
      navigate(`/`);
    }, 0);
  };
  return (
    <div className={`poster-img`}>
      <Link to={"/refresh"}>
        <img src={props.poster} onClick={dispatchData} />
      </Link>
    </div>
  );
}

export default Poster;
