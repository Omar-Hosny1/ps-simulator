import React from "react";
import MediaData from "./MediaData";
import MediaPoster from "./MediaPoster";
import MediaOverviewData from "./MediaOverviewData";
import MediaBox from "./MediaBox";
import MovieDetails from "./MovieDetails";
import { useSelector } from "react-redux";
import api_properties from "../../Api/Api";

function MediaCom() {
  const MoviesData = useSelector((state) => state.MoviesSlice.data);

  const randomNum = Math.floor(Math.random() * 20);

  const preparingMovie = MoviesData[randomNum];

  const MediaLogos = MediaData.map((ele) => (
    <MediaPoster image={ele.image} key={Math.random()} />
  ));

  const OverViewBoxes = MediaOverviewData.map((ele) => (
    <MediaBox key={Math.random()} image={ele.image} logo={ele.logo} />
  ));

  return (
    <>
      <MovieDetails
        title={preparingMovie.title}
        image={api_properties.IMAGE_URL + preparingMovie.backdrop_path}
        desc={preparingMovie.overview.substr(0, 170) + "..."}
      />
      <div className="media-container">{MediaLogos}</div>
      <span className="fea-span">Featured</span>
      <div className="movies-container">{OverViewBoxes}</div>
    </>
  );
}

export default MediaCom;
