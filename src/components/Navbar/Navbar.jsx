import React from "react";
import image from "../../images/cryptocurrency.png";
import "../Navbar/Navbar.scss";
import { Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";

import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={image} size="large" />
        <Typography.Title level={3} className="logo">
          <Link to="/">Marketo Crypto</Link>
        </Typography.Title>
        <div className="nav-link">
          <Link to="/" style={{ marginRight: "200px", fontSize: "20px" }}>
            Home
          </Link>
          <Link
            to="/Cryptocurrencies"
            style={{ marginRight: "200px", fontSize: "20px" }}
          >
            Cryptos
          </Link>
          <Link to="/News" style={{ marginRight: "200px", fontSize: "20px" }}>
            News
          </Link>
          <Link to="/NFT" style={{ marginRight: "200px", fontSize: "20px" }}>
            NFT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
