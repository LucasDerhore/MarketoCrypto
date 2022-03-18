import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import News from "../News/News";
import Cryptocurrencies from "../Cryptocurrencies/Cryptocurrencies";

import "../Homepage/Home.scss";

const { Title } = Typography;

const Home = () => {
  //const { data, isFetching } = useGetCryptosQuery(10);
  //const globalStats = data?.data?.stats;

  //const { data, isFetching } =  useGetCryptoNewsQuery(3);

  return (
    <>
      <div className="home-cryptos">
        <Title level={2} className="heading">
          Top 10 Best Cryptos moment
        </Title>
        <div>
          <Cryptocurrencies simplified />
        </div>
        <Title level={3}>
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
        <div className="home-heading-container">
          <Title level={2} className="home-title">
            Latest Crypto News
          </Title>
        </div>
        <News simplified />
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>
    </>
  );
};

export default Home;
