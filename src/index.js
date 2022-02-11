import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#b53a25",
//       light: "#9097bb",
//       dark: "darkblue",
//       contrastText: "#fff3f3",
//     },
//     secondary: {
//       main: "#b04814",
//       rosybrown: "#a88671",
//       darkseagreen: "#90a78b",
//       seagreen: "#dae8d9",
//       dimgray: "#677662",
//     },
//     background: {
//       default: "#f4f0e1",
//     },
//     text: {
//       primary: "#2b3531",
//       secondary: "#ffe",
//       disabled: "#fff",
//       hint: "#aaa",
//     },
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
