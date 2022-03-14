import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import {
  Navbar,
  Home,
  Cryptocurrencies,
  News,
  CryptoDetails,
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
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="../Cryptocurrencies/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route
                path="../CryptoDetails/cryptodetails"
                element={<CryptoDetails />}
              />
              <Route path="../News/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default App;
