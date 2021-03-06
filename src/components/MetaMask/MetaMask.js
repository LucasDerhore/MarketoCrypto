import React, { useState } from "react";
import { Button, Typography, Avatar, Col } from "antd";

import image_1 from "../../images/metamask.svg";
import image_2 from "../../images/binance.svg";
import image_3 from "../../images/opensea.svg";

import "../MetaMask/MetaMask.scss";

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
    }
  };

  return (
    <div className="metamask-container">
      <Col className="metamask-col">
        <Title level={1} className="metamask-title">
          What is MetaMask used for exactly ?
        </Title>
        <div className="metamask-card">
          <div className="metamask-text">
            <a href="https://metamask.io/" target="_blank" rel="noreferrer">
              <Avatar className="avatar-metamask" src={image_1} size="large" />
            </a>
            <p>
              MetaMask allows users to store and manage account keys, broadcast
              transactions, sending and receiving Ethereum-based
              cryptocurrencies, tokens and also convenient for NFTs. Securely
              connect to decentralized applications through a compatible web
              browser or the mobile app's built-in browser. MetaMask is use for
              example with Binance and OpenSea.
            </p>
            <Button onClick={() => signMetamask()}>Connect Metamask</Button>

            <div className="metamask-account">
              {ethereum && (
                <p>
                  Your Ethereum address: <h4>{addr}</h4>
                </p>
              )}
              {!ethereum && <h3>Please active your extension MetaMask.</h3>}
            </div>

            {ethereum && (
              <h3>
                Disconnect your address with metamask and leave the site to
                disconnect the metamask extension.
              </h3>
            )}
          </div>
        </div>
      </Col>

      <Title level={1} className="platform-title">
        Platforms that use Metamask !
      </Title>
      <div className="platform-container">
        <Col className="platform-col">
          <Col className="binance-col">
            <div className="binance-card">
              <Title level={2} className="platform-title">
                What is Binance used for?
              </Title>
              <a
                href="https://www.binance.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Avatar className="avatar-binance" src={image_2} size="large" />
              </a>
              <p>
                Binance is an online exchange where users can trade
                cryptocurrencies. It supports most commonly traded
                cryptocurrencies. Binance provides a crypto wallet for traders
                to store their electronic funds. The exchange also has
                supporting services for users to earn interest or transact using
                cryptocurrencies.
              </p>
            </div>
          </Col>

          <Col className="opensea-col">
            <div className="opensea-card">
              <Title level={2} className="platform-title">
                What is opensea used for?
              </Title>
              <a href="https://opensea.io/" target="_blank" rel="noreferrer">
                <Avatar className="avatar-opensea" src={image_3} size="large" />
              </a>
              <p>
                OpenSea is the leading marketplace for non-fungible tokens. The
                platform lets users buy and sell NFTs on the secondary
                marketplace and also create their own NFT collections to sell on
                the primary marketplace.
              </p>
            </div>
          </Col>
        </Col>
      </div>
    </div>
  );
}

export default MetaMask;
