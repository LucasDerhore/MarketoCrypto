import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Card, Row, Col, Input, Table } from "antd";
import { Link } from "react-router-dom";
import "../Cryptocurrencies/Cryptocurrencies.scss";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const Cryptocurrencies = (simplified) => {
  const count = simplified ? 50 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    { title: "Rank", dataIndex: "rank", key: "rank" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Icon", dataIndex: "icon", key: "icon" },
    { title: "Symbol", dataIndex: "symbol", key: "symbol" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Daily Change", dataIndex: "daily change", key: "daily change" },
  ];

  // console.log(cryptosList);
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

      <Table
        className="table-crypto"
        rowClassName="table-cryptoDetails"
        columns={columns}
        dataSource={cryptos}
      ></Table>
    </>
  );
};

export default Cryptocurrencies;
