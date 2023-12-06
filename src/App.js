import React, { useState, createContext } from "react";
import Home from "./pages/Home/Home.js";
import DetailsPage from "./pages/DetailsPage/DetailsPage.js";
import { Route, Switch } from "react-router-dom";
import Error from "./pages/ErrorPage/Error.js";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const CountriesInfoContext = createContext();

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CountriesInfoContext.Provider value={countriesInfo}>
        <Switch>
          <Route exact path="/">
            <Home
              setCountriesInfo={setCountriesInfo}
              countriesInfo={countriesInfo}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </Route>
          <Route exact path="/details">
            <DetailsPage
              setCountriesInfo={setCountriesInfo}
              countriesInfo={countriesInfo}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </Route>
          <Route component={Error} />
        </Switch>
      </CountriesInfoContext.Provider>
    </ThemeProvider>
  );
};

export default App;
