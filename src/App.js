import "./App.css";
import Header from "./components/Layout/Header/Header";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Media from "./Pages/Media";
import LockScreen from "./components/LockScreen/LockScreen";
function App() {
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
