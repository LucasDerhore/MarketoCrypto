import React from "react";
import millify from "millify";
import { Typography, Row, Card, Avatar, Col } from "antd";
import { Link } from "react-router-dom";
import image_2 from "../../images/crypto.jpg";
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
        {/* <Row gutter={[32, 32]} className="home-main-heading">
          <Card className="what-and-why-crypto">
            <Title level={2} className="title-heading">
              What's Cryptocurrency ?{" "}
            </Title>
            <p>
              A virtual means of payment that is used primarily on the Internet,
              relying on cryptography to secure transactions and the creation of
              units, and escaping all control by regulators and central banks.
              (Also known as cryptocurrency.) (There are hundreds of
              cryptocurrencies in the world, including bitcoin. Because they are
              not legal tender, experts prefer to call them cryptoassets).
            </p>
            <p>
              Why <em>cryptocurrency</em>? It's a rapidly growing market. It's a
              very large territory that the world is slowly discovering.
            </p>
          </Card>
        </Row> */}

        <div className="home-cryptos">
          <Title level={2} className="home-title-crypto">
            Top 10 Cryptocurrencies
          </Title>
          <Title level={3} className="show-more">
            <Link to="/cryptocurrencies">Show More</Link>
          </Title>
        </div>
        <Cryptocurrencies simplified />

        <div className="home-news">
          <Title level={2} className="home-title-news">
            Latest Crypto News Published
          </Title>
          <Title level={3} className="show-more">
            <Link to="/news">Show more</Link>
          </Title>
        </div>
        <Card className="card-news">
          <News simplified />
        </Card>
      </div>
    </>
  );
};

export default Home;
