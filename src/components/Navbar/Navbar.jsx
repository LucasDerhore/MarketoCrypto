import React from "react";
import image from "../../images/cryptocurrency.png";
import image_1 from "../../images/metamask.svg";
import "../Navbar/Navbar.scss";
import { Avatar, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Navbar = () => {
  return (
    <header>
      <nav>
        <label for="toggle">
          <Title lvl={3} className="nav-title">
            <Avatar src={image} size="large" className="nav-logo" />
            Marketo Crypto
          </Title>
          ☰
        </label>
        <input type="checkbox" id="toggle"></input>
        <div className="nav-link">
          <Avatar src={image} size="large" className="nav-logo" />
          <Title lvl={3} className="nav-title">
            Marketo Crypto
          </Title>
          <Link to="/">Home</Link>
          <Link to="/Cryptocurrencies">Cryptos</Link>
          <Link to="/News">News</Link>
          <Link to="/NFT">NFT</Link>
          <Link to="/Metamask">
            <Avatar src={image_1} size="large" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
