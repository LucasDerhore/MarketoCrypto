import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import News from "../News/News";

const { Title } = Typography;

const Home = () => {
  //const { data, isFetching } = useGetCryptosQuery(10);
  //const globalStats = data?.data?.stats;

  //const { data, isFetching } =  useGetCryptoNewsQuery(3);

  return (
    <>
      <div className="home-cryptos">
        <Title level={2} className="heading" style={{ textAlign: "center" }}>
          Top 10 Best Cryptos moment
        </Title>
        <div className="home-heading-container">
          <Title
            level={2}
            className="home-title"
            style={{ textAlign: "center" }}
          >
            Latest Crypto News
          </Title>
        </div>
        <News simplified />
      </div>
      <Title level={3} style={{ textAlign: "center" }}>
        <Link to="/news">Show more</Link>
      </Title>
    </>
  );
};

export default Home;
