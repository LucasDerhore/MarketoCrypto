import React, { useState, useEffect } from "react";
import "chartjs-adapter-date-fns";
import millify from "millify";
import { Input, Table } from "antd";
import { Link } from "react-router-dom";
import "../Cryptocurrencies/Cryptocurrencies.scss";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");

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

  if (isFetching) return "Loading..";
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
