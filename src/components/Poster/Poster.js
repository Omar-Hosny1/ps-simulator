import React from "react";

function Poster(props) {
  return (
    <div className="poster-img">
      <img src={props.img} />
    </div>
  );
}

export default Poster;
