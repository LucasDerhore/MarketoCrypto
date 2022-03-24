import React, { useState, useEffect } from "react";
import "chartjs-adapter-date-fns";
import millify from "millify";
import { Input, Table, Avatar, Typography } from "antd";
import { Link } from "react-router-dom";
import "../Cryptocurrencies/Cryptocurrencies.scss";

import { useGetCryptosQuery } from "../../services/cryptoApi";
import { colors } from "@material-ui/core";

const { Title } = Typography;

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

  if (isFetching) return "Loading..";
  return (
    <>
      {!simplified && (
        <div className="cryptos-page">
          <div className="global-stats-crypto">
            <Title level={1} className="heading">
              Global Crypto Stats
            </Title>
            <div class="statistic-crypto">
              <div className="global-total">
                <p className="stats-title">Total Cryptocurrencies</p>
                <p className="stats-global">{millify(globalStats.total)} </p>
              </div>
              <div className="global-exchanges">
                <p className="stats-title">Total Exchanges</p>
                <p className="stats-global">
                  {millify(globalStats.totalExchanges)}
                </p>
              </div>
              <div className="global-marketcap">
                <p className="stats-title">Total Market Cap</p>
                <p className="stats-global">
                  {millify(globalStats.totalMarketCap)}
                </p>
              </div>
              <div className="global-24hvolume">
                <p className="stats-title">Total 24h Volume</p>
                <p className="stats-global">
                  {millify(globalStats.total24hVolume)}
                </p>
              </div>
              <div className="global-markets">
                <p className="stats-title">Total Markets</p>
                <p className="stats-global">
                  {millify(globalStats.totalMarkets)}
                </p>
              </div>
            </div>
          </div>
          <div className="paragraph-crypto">
            <em>
              <p>
                All, the cryptos other than Bitcoin, are called
                <strong> altcoin.</strong>
              </p>
              <p>
                Here, 100 crypto-currencies are listed in order from most to
                least traded.
              </p>
            </em>
          </div>
          <div className="search-crypto">
            <Input
              class="no-outline"
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
