import React, { useState } from "react";

import image_1 from "../../images/metamask.svg";
import "../MetaMask/MetaMask.scss";
import { Card, Button, Typography, Avatar } from "antd";

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
    <div className="metamask-wallet">
      <Card className="metamask-card">
        <Title level={1} className="heading">
          MetaMask <Avatar src={image_1} size="large" />
        </Title>
        <Button onClick={() => signMetamask()}>Connect Metamask</Button>

        {ethereum && <h2>Your Ethereum adress: {addr}</h2>}

        <p>diconnect with extension MetaMask</p>
      </Card>
    </div>
  );
}

export default MetaMask;
