import { Routes, Route } from "react-router-dom";
import LockScreen from "./components/LockScreen/LockScreen";
import Header from "./components/Layout/Header/Header";
import Media from "./Pages/Media";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import api_properties from "./Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { MoviesActions } from "./Store/MoviesSlice";
import GoogleAuth from "./components/GoogleAuth/GoogleAuth";
import HelloMsg from "./components/HelloMsg/HelloMsg";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMoveHandler = (e) => {
      setMousePosition({
        x: e.clientX - 20,
        y: e.clientY - 20,
      });
    };
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  });

  const isAuthenticated = useSelector(
    (state) => state.AuthSlice.isAuthenticated
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isAuthenticated")
  );
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isAuthenticated"));
  }, [isAuthenticated]);

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

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };
  return (
    <>
      <motion.div
        className="cursor"
        style={{ backgroundColor: "transparent" }}
        variants={variants}
        animate="default"
      />
      ;
      <HelloMsg />
      <Header />
      <LockScreen />
      {!isLoggedIn && <GoogleAuth />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/refresh" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
