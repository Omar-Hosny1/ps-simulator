import React from "react";

function MediaBox(props) {
  return (
    <div className="media-box">
      <img src={props.image} />
      <img src={props.logo} />
    </div>
  );
}

export default React.memo(MediaBox);
