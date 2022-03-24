import React from "react";
import image from "../../images/cryptocurrency.png";
import image_1 from "../../images/metamask.svg";
import "../Navbar/Navbar.scss";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <label for="toggle">☰</label>
        <input type="checkbox" id="toggle"></input>
        <div className="nav-link">
          <Avatar src={image} size="large" />
          <Link to="/">Marketo Crypto</Link>
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
