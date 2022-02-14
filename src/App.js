import Header from "./components/Header/Header.js";
import MainDisplay from "./components/MainDisplay/MainDisplay.js";
import DetailsPage from "./components/DetailsPage/DetailsPage.js";

function App() {
  return (
    <div className="App">
      {/* <Header sx={{ display: "block" }} /> */}
      {/* <MainDisplay sx={{ display: "block", top: "120px" }} /> */}
      <DetailsPage />
    </div>
  );
}

export default App;
