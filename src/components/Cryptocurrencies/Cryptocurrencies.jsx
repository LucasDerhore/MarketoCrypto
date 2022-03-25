import React, { useState, useEffect } from "react";

import millify from "millify";
import { Input, Table, Avatar, Typography, Col } from "antd";
import { Link } from "react-router-dom";

import image from "../../images/cryptocurrency.png";
import "../Cryptocurrencies/Cryptocurrencies.scss";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const { Title, Text } = Typography;

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");
  const globalStats = data?.data?.stats;

  const columns = [
    { title: "Rank", dataIndex: "rank", key: "rank" },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, cryptos) => (
        <Link to={`/crypto/${cryptos.uuid}`}>{text}</Link>
      ),
    },
    {
      title: "Icon",
      dataIndex: "iconUrl",
      key: "iconUrl",
      render: (cryptos) => <img src={`${cryptos}`} />,
    },
    { title: "Symbol", dataIndex: "symbol", key: "symbol" },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (cryptos) => <p>{millify(cryptos)}$</p>,
    },
    {
      title: "Daily Change",
      dataIndex: "change",
      key: "change",
      render: (cryptos) => <p>{cryptos}%</p>,
    },
  ];

  console.log(cryptosList);
  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching)
    return (
      <div className="loading-crypto">
        <h1>
          Loading... <Avatar className="loading-img" src={image} size="large" />
        </h1>
      </div>
    );
  return (
    <>
      {!simplified && (
        <div className="cryptos-page">
          <div className="global-stats-crypto">
            <Title level={1} className="heading">
              Global Crypto Stats
            </Title>
            <div className="col-container">
              <Col className="statistic-crypto">
                <Col className="global-total">
                  <Text className="stats-title">Total Cryptocurrencies</Text>
                  <Text className="stats-global">
                    {millify(globalStats.total)}{" "}
                  </Text>
                </Col>
                <Col className="global-exchanges">
                  <Text className="stats-title">Total Exchanges</Text>
                  <Text className="stats-global">
                    {millify(globalStats.totalExchanges)}
                  </Text>
                </Col>
                <Col className="global-marketcap">
                  <Text className="stats-title">Total Market Cap</Text>
                  <Text className="stats-global">
                    {millify(globalStats.totalMarketCap)}
                  </Text>
                </Col>
                <Col className="global-24hvolume">
                  <Text className="stats-title">Total 24h Volume</Text>
                  <Text className="stats-global">
                    {millify(globalStats.total24hVolume)}
                  </Text>
                </Col>
                <Col className="global-markets">
                  <Text className="stats-title">Total Markets</Text>
                  <Text className="stats-global">
                    {millify(globalStats.totalMarkets)}
                  </Text>
                </Col>
              </Col>
            </div>
          </div>
          <div className="paragraph-crypto">
            <p>
              All, the cryptos other than Bitcoin, are called
              <strong> altcoin.</strong>
            </p>
            <p>
              Here, 100 crypto-currencies are listed in order from most to least
              traded.
            </p>
          </div>
          <div className="search-crypto">
            <Input
              className="search-bar"
              placeholder="Search Cryptocurrency"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="cryptos-currency">
        <Table
          className="table-crypto"
          rowClassName="table-cryptoDetails"
          columns={columns}
          dataSource={cryptos}
          hoverable
        ></Table>
      </div>
    </>
  );
};

export default Cryptocurrencies;
