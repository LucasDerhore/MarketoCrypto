import React, { useState } from "react";

import image_1 from "../../images/metamask.svg";
import image_2 from "../../images/binance.svg";
import image_3 from "../../images/opensea.svg";

import "../MetaMask/MetaMask.scss";
import { Card, Button, Typography, Avatar, Col, Row } from "antd";

const { Title } = Typography;

function MetaMask() {
  const ethereum = window.ethereum;
  const [addr, setAddr] = useState("");

  const signMetamask = () => {
    if (ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" });
      ethereum.on("accountsChanged", function (accounts) {
        setAddr(accounts[0]);
      });
      console.log("MetaMask is installed!");
    }
  };

  return (
    <div className="metamask-container">
      <Col className="metamask-col">
        <Card className="metamask-card">
          <Title level={1} className="metamask-title">
            What is MetaMask used for exactly ?
          </Title>
          <a href="https://metamask.io/">
            <Avatar src={image_1} size="large" />
          </a>
          <h2>
            MetaMask allows users to store and manage account keys, broadcast
            transactions, sending and receiving Ethereum-based cryptocurrencies,
            tokens and also convenient for NFTs. Securely connect to
            decentralized applications through a compatible web browser or the
            mobile app's built-in browser. MetaMask is use for example with
            Binance and OpenSea.
          </h2>
          <Button onClick={() => signMetamask()}>Connect Metamask</Button>

          <div className="metamask-account">
            {ethereum && <h2>Your Ethereum adress: {addr}</h2>}
            {!ethereum && <h2>Please active your extension MetaMask</h2>}
          </div>

          {ethereum && <h3>diconnect with extension MetaMask</h3>}
        </Card>
      </Col>

      <Card className="platform-container">
        <Title level={1} className="platform-title">
          Platforms that use Metamask !
        </Title>
        <Col className="platform-col">
          <Col className="binance-col">
            <div className="binance-card">
              <Title level={3} className="platform-title">
                What is Binance used for?
              </Title>
              <a href="https://www.binance.com/">
                <Avatar src={image_2} size="large" />
              </a>
              <h2>
                Binance is an online exchange where users can trade
                cryptocurrencies. It supports most commonly traded
                cryptocurrencies. Binance provides a crypto wallet for traders
                to store their electronic funds. The exchange also has
                supporting services for users to earn interest or transact using
                cryptocurrencies.
              </h2>
            </div>
          </Col>

          <Col className="opensea-col">
            <div className="opensea-card">
              <Title level={3} className="platform-title">
                What is OpenSea used for?
              </Title>
              <a href="https://opensea.io/">
                <Avatar src={image_3} size="large" />
              </a>
              <h2>
                Quick Take: OpenSea is the leading marketplace for non-fungible
                tokens. The platform lets users buy and sell NFTs on the
                secondary marketplace and also create their own NFT collections
                to sell on the primary marketplace
              </h2>
            </div>
          </Col>
        </Col>
      </Card>
    </div>
  );
}

export default MetaMask;
