import "./App.css";
import PosterView from "./components/PosterView/PosterView";
import Header from "./components/Layout/Header/Header";
import Data from "./components/Data/Data";
import Poster from "./components/Poster/Poster";

function App() {
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
    <div className="App">
      <Header />
      <div className="games-container">{Games}</div>
      <PosterView />
    </div>
  );
}

export default App;
