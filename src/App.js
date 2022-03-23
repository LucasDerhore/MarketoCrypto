import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Cryptocurrencies,
  CryptoDetails,
  Home,
  News,
  Nft,
  LineChart,
  Navbar,
  Footer,
  MetaMask,
} from "./components";
import { Paper, Switch } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import "./App.scss";

const App = () => {
  console.log(process.env.REACT_APP_TOKENCOINRANKING);
  console.log(process.env.REACT_APP_TOKENBING);
  console.log(process.env.REACT_APP_TOKENNFT);

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100%" }}>
        <div className="app">
          <div className="navbar">
            <Navbar />
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>
          <div className="main">
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                  exact
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route
                  exact
                  path="/crypto/:coinId"
                  element={<CryptoDetails />}
                />
                <Route exact path="/news" element={<News />} />
                <Route exact path="/nft" element={<Nft />} />
                <Route exact path="/linechart" element={<LineChart />} />
                <Route exact path="/metamask" element={<MetaMask />} />
              </Routes>
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
