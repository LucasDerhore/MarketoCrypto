import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import News from "../News/News";
import Cryptocurrencies from "../Cryptocurrencies/Cryptocurrencies";

import "../Homepage/Home.scss";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  //const { data, isFetching } =  useGetCryptoNewsQuery(3);

  if (isFetching) return "Loading";

  return (
    <>
      <div className="global-stats-crypto">
        <Title level={2} className="heading">
          Global Crypto Stats
        </Title>
        <Row>
          <Col span={12}>
            <Statistic
              title="Total Cryptocurrencies"
              value={globalStats.total}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Exchanges"
              value={globalStats.totalExchanges}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Market Cap"
              value={globalStats.totalMarketCap}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total 24h Volume"
              value={globalStats.total24hVolume}
            />
          </Col>
          <Col span={12}>
            <Statistic title="Total Markets" value={globalStats.totalMarkets} />
          </Col>
        </Row>
      </div>

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
