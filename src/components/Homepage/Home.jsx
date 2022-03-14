import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  return (
    <>
      <div className="home-cryptos">
        <Title level={2} className="heading">
          Top 10 Best Cryptos moment
        </Title>
      </div>
    </>
  );
};

export default Home;
