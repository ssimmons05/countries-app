import React, { useState } from "react";
import Home from "./pages/Home/Home.js";
import DetailsPage from "./pages/DetailsPage/DetailsPage.js";
import { Route, Switch } from "react-router-dom";
import Error from "./pages/Error.js";

function App() {
  const [countriesInfo, setCountriesInfo] = useState([]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}>
          <Home
            setCountriesInfo={setCountriesInfo}
            countriesInfo={countriesInfo}
          />
        </Route>
        <Route path="/details" component={DetailsPage}>
          <DetailsPage countriesInfo={countriesInfo} />
        </Route>
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
