import React from "react";
import { useDispatch } from "react-redux";
import { GameActions } from "../../Store/GameSlice";
function Poster(props) {
  const dispatch = useDispatch();
  const dispatchData = () => {
    dispatch(GameActions.updateData(props));
  };
  return (
    <div className="poster-img" onClick={dispatchData}>
      <img src={props.poster} />
    </div>
  );
}

export default Poster;
