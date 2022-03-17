import React, { useState } from "react";
import Home from "./pages/Home/Home.js";
import DetailsPage from "./pages/DetailsPage/DetailsPage.js";
import { Route, Switch } from "react-router-dom";
import Error from "./pages/ErrorPage/Error.js";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NoEncryption } from "@mui/icons-material";

const App = () => {
  const [countriesInfo, setCountriesInfo] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
    typography: {
      fontFamily: ["NunitoSans", "Arial", "Roboto"].join(","),
    },
  });

  console.log(countriesInfo);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <Home
            setCountriesInfo={setCountriesInfo}
            countriesInfo={countriesInfo}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </Route>
        <Route exact path="/:country">
          <DetailsPage
            countriesInfo={countriesInfo}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </Route>
        <Route component={Error} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
