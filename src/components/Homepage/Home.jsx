import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Home = () => {
  return (
    <Title level={2} className="heading">
      Top 10 Best Cryptos moment
    </Title>
  );
};

export default Home;
