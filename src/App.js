import "./App.css";
import Header from "./components/Layout/Header/Header";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Media from "./Pages/Media";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/refresh" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
