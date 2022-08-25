import React, { useState } from "react";
import Poster from "../components/Poster/Poster";
import PosterView from "../components/PosterView/PosterView";
import Data from "../components/Data/Data";
import Logo from "../components/Images/logo.png";

function Home() {
  const [start, setStart] = useState(localStorage.getItem("isStart"));
  const Games = Data.map((ele) => (
    <Poster
      poster={ele.poster}
      key={Math.random()}
      title={ele.title}
      desc={ele.desc}
      image={ele.image}
      id={ele.id}
    />
  ));
  return (
    <>
      <div className={`lock-layer ${start ? "start" : ""}`}>
        <div>
          <img
            src={Logo}
            onClick={() => {
              localStorage.setItem("isStart", true);
              setStart(localStorage.getItem("isStart"));
            }}
          />
          <span>Press Any button to start</span>
        </div>
      </div>
      <div className="games-container">{Games}</div>
      <PosterView />
    </>
  );
}

export default Home;
