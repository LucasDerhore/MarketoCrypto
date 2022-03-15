import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../../services/cryptoNews";

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
        <Title level={2} className="heading">
          Some News
        </Title>
      </div>
    </>
  );
};

export default Home;
