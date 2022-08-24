import React from "react";

function PosterView(props) {
  return (
    <div className="poster-view">
      <div
        className="background-image"
        style={{
          backgroundImage: `url("${props.image} ")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="poster-info">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <button>Play</button>
        <button>...</button>
      </div>
    </div>
  );
}

export default PosterView;
