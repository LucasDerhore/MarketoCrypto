import React from "react";
import image from "../../images/cryptocurrency.png";
import image_1 from "../../images/metamask.svg";
import "../Navbar/Navbar.scss";
import { Typography, Avatar } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={image} size="large" />
        <Typography.Title level={3} className="logo">
          <Link to="/">Marketo Crypto</Link>
        </Typography.Title>
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/Cryptocurrencies">Cryptos</Link>
          <Link to="/News">News</Link>
          <Link to="/NFT">NFT</Link>
          <Link to="/Metamask">
            <Avatar src={image_1} size="large" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
