import React from "react";
import { Typography, Card } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import News from "../News/News";
import Cryptocurrencies from "../Cryptocurrencies/Cryptocurrencies";

import "../Homepage/Home.scss";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  //const { data, isFetching } =  useGetCryptoNewsQuery(3);

  if (isFetching) return "Loading";

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
