import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NunitoSans from "../src/fonts/Nunito_Sans/NunitoSans-SemiBold.ttf";
import CssBaseline from "@mui/material/CssBaseline";

const nunitoSans = {
  fontFamily: "NunitoSans",
  fontStyle: "semi-bold",
  fontDisplay: "swap",
  fontWeight: "600",
  src: `
      local('NunitoSans'),
      local('NunitoSans-SemiBold'),
      url(${NunitoSans}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createTheme({
  palette: {
    lightMode: {
      background: "hsl(0, 0%, 98%)",
      input: "hsl(0,0%,52%)",
      elements: "hsl(0,0%,100%)",
      text: "hsl(200,15%,8%)",
    },
    darkMode: {
      background: "hsl(207,26%,17%)",
      input: "hsl(0,0%,98%)",
      elements: "hsl(209,23%,22%)",
      text: "hsl(0,0%,100%)",
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', "NunitoSans", "Roboto"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [nunitoSans],
      },
    },

    // subtitle1: {
    //   fontSize: 12,
    // },
    // body1: {
    //   fontWeight: 500,
    // },
    // button: {
    //   fontStyle: "italic",
    // },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
