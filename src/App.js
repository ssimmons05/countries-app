import React from "react";
import Home from "./pages/Home/Home.js";
import DetailsPage from "./pages/DetailsPage/DetailsPage.js";
import { Route, Switch } from "react-router-dom";
import Error from "./pages/Error.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={DetailsPage} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
