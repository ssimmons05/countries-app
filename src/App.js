import Header from "./components/Header/Header.js";
import MainDisplay from "./components/MainDisplay/MainDisplay.js";

function App() {
  return (
    <div className="App">
      <Header sx={{ display: "block" }} />
      <MainDisplay sx={{ display: "block", top: "120px" }} />
    </div>
  );
}

export default App;
