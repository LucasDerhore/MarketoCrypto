import React from "react";
import { Layout, Typography, Space } from "antd";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        CryptoMarketo <br />
        All rights reserverd
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        <Link to="/news">News</Link>
        <Link to="/nft">NFT</Link>
      </Space>
    </div>
  );
};

export default Footer;
