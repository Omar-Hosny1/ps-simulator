import { Routes, Route } from "react-router-dom";
import LockScreen from "./components/LockScreen/LockScreen";
import Header from "./components/Layout/Header/Header";
import Media from "./Pages/Media";
import Home from "./Pages/Home";
import { useEffect } from "react";
import api_properties from "./Api/Api";
import { useDispatch } from "react-redux";
import { GameActions } from "./Store/GameSlice";
import "./App.css";
import { MoviesActions } from "./Store/MoviesSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(api_properties.API_URL)
      .then((response) => {
        return response.json();
      })
      .then((fullData) => {
        dispatch(MoviesActions.setData(fullData.results));
      });
  }, []);
  return (
    <>
      <Header />
      <LockScreen />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/refresh" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
