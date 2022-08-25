import React from "react";
import Image from "./media.jpg";
function MovieDetails(props) {
  const style = {
    backgroundImage: `url("${props.image}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <>
      <div className="media" style={style}></div>
      <div className="media-movie">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </>
  );
}

export default MovieDetails;
