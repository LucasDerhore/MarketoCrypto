import React, { useState, useEffect } from "react";
import millify from "millify";
import { Card, Row, Col, Input, Table } from "antd";
import { Link } from "react-router-dom";
import "../Cryptocurrencies/Cryptocurrencies.scss";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const Cryptocurrencies = (simplified) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");
  const dataSource = [
    { rank: "1", name: "Bitcoin", market: "1000000", value: "37205" },
    { rank: "2", name: "Solana", market: "5000", value: "0.80" },
  ];
  const columns = [
    { title: "Rank", dataIndex: "rank", key: "name" },
    { title: "Name", dataIndex: "name", key: "age" },
    { title: "Market", dataIndex: "market", key: "adress" },
    { title: "Value", dataIndex: "value", key: "value" },
  ];

  console.log(cryptosList);
  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return "Loading..";
  return (
    <>
      <div className="search-crypto">
        <Input
          placeholder="search Cryptocurrency"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* <Row gutter={[16, 16]} className="crypto-card-container"> */}
      {cryptos?.map((currency) => (
        <Col span={6} className="crypto-card" key={currency.uuid}>
          <Link to={`/crypto/${currency.uuid}`}>
            <Card
              title={`${currency.rank}. ${currency.name}`}
              extra={<img className="crypto-image" src={currency.iconUrl} />}
              hoverable
            ></Card>
          </Link>
        </Col>
      ))}
      {/* </Row> */}
      {/* <Table dataSource={dataSource} columns={columns} />; */}
    </>
  );
};

export default Cryptocurrencies;
