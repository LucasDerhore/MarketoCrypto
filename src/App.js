import React from "react";
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

import "./App.scss";

const App = () => {
  console.log(process.env.REACT_APP_TOKENCOINRANKING);
  console.log(process.env.REACT_APP_TOKENBING);
  console.log(process.env.REACT_APP_TOKENNFT);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="app">
        <body>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/nft" element={<Nft />} />
              <Route exact path="/linechart" element={<LineChart />} />
              <Route exact path="/metamask" element={<MetaMask />} />
            </Routes>
          </div>
        </body>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
