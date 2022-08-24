import "./App.css";
import PosterView from "./components/PosterView/PosterView";
import Header from "./Layout/Header/Header";
import Data from "./components/Data/Data";
import Poster from "./components/Poster/Poster";
import Image from "./Background.png";
function App() {
  const Games = Data.map((ele) => <Poster img={ele.poster} />);
  return (
    <div className="App">
      <Header />
      <div className="games-container">{Games}</div>
      <PosterView image={Image} title={Data[0].title} desc={Data[0].desc} />
    </div>
  );
}

export default App;
