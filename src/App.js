import Header from "./components/Header/Header.js";
import MainDisplay from "./components/MainDisplay/MainDisplay.js";

function App() {
  return (
    <div className="App">
      <Header />
      <MainDisplay sx={{ position: "fixed", top: "100px" }} />
    </div>
  );
}

export default App;
