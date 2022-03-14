import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Cryptocurrencies,
  CryptoDetails,
  Home,
  News,
  Nft,
  LineChart,
  Navbar,
  Footer,
} from "./components";

const App = () => {
  console.log(process.env.REACT_APP_TOKENCOINRANKING);
  console.log(process.env.REACT_APP_TOKENBING);
  console.log(process.env.REACT_APP_TOKENNFT);

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
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
            <Route exact path="/cryptodetails" element={<CryptoDetails />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/nft" element={<Nft />} />
            <Route exact path="/linechart" element={<LineChart />} />
          </Routes>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
