import React, { useState, useEffect } from "react";
import millify from "millify";
import { Card, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";

{
  /*import { useGetCryptosQuery } from "../services/cryptoApi";*/
}

const Cryptocurrencies = () => {
  {
    /*const { data: cryptosList, isFetching } = useGetCryptosQuery();
const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);*/
    const [cryptos, setCryptos] = useState("");
  }
  return (
    <>
      <div className="search-crypto">
        <Input
          placeholder="search Cryptocurrecncy"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Row gutter={[32, 32]} className="crypto-card-container">
        <Col xs={24} sm={12} lg={6} className="crypto-card">
          <Card title="BTC" extra="img-crypto" hoverable>
            <p>Price</p>
            <p>Market Cap</p>
            <p>Daily Change</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Cryptocurrencies;
