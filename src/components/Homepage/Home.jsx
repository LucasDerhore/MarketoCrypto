import React from "react";
import { Typography, Card, Avatar } from "antd";
import { Link } from "react-router-dom";
import News from "../News/News";
import Cryptocurrencies from "../Cryptocurrencies/Cryptocurrencies";

import image from "../../images/cryptocurrency.png";
import "../Homepage/Home.scss";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  if (isFetching)
    return (
      <div className="loading-news">
        <h1>
          Loading... <Avatar className="loading-img" src={image} size="large" />
        </h1>
      </div>
    );

  return (
    <>
      <div className="home-main">
        <div className="home-cryptos">
          <Title level={2} className="home-title-crypto">
            Top 10 Cryptocurrencies
          </Title>

          <Cryptocurrencies simplified />

          <Title level={3} className="show-more">
            <Link to="/cryptocurrencies">More Crypto</Link>
          </Title>
        </div>

        <div className="home-news">
          <Title level={2} className="home-title-news">
            Latest Crypto News Published
          </Title>
          <Card className="card-news">
            <News simplified />
          </Card>
          <Title level={3} className="show-more">
            <Link to="/news">More News</Link>
          </Title>
        </div>
      </div>
    </>
  );
};

export default Home;
