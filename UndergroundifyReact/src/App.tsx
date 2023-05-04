import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppNav from "./Components/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <AppNav />
          <Router />
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
