import "./App.css";
import NavBar from "./Components.jsx/navbar";
import CardMod from "./Components.jsx/cardMod";
import Details from "./Components.jsx/details";

function App() {
  return (
    <div className="bg-[#E7F1FF] min-h-screen p-0 m-0">
      <div id="root">
        <NavBar />
        <CardMod />
      </div>
    </div>
  );
}

export default App;
