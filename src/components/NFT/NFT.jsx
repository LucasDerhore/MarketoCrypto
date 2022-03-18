import React, { useState } from "react";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import "./NFT.scss";

import { useGetNftQuery } from "../../services/cryptoNft";
import CardDetail from "../CardDetail/CardDetail";
import eachMonthOfInterval from "date-fns/eachMonthOfInterval/index";

const { Title } = Typography;

const Nft = ({ simplified }) => {
  // const { data: nftsList, isFetching } = useGetNftQuery({});

  const nftsList = [
    {
      collection_name: "CryptoPunks",
      collection_url: "google.com",
      floor: 986,
      volume: 948,
    },
    {
      collection_name: "Bored Ape Yacht Club",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "Bored Ape Kennel Club",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "CrypToadz by GREMPLIN",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "CLONE X - X TAKASHI MURAKAMI",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "Doodles",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "Meebits",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "Azuki",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "The Sandbox",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "VeeFriends",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "Emblem Vault [Ethereum]",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "Cool Cats NFT",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "Bored Ape Chemistry Club",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
  ];

  //if (isFetching) return "Loading...";
  // Bizarre, j'peux test ?
  return (
    <>
      <div className="main-container">
        <div className="title-container">
          <Title level={1} className="heading-nft">
            Introduce NFT
          </Title>
          <Title level={2} className="min-heading-nft">
            What is an NFT ?
          </Title>
          <Col className="col-text">
            <Col className="col-text-heading">
              NFT stands for 'non-fungible token'. When something is fungible,
              like a dollar bill, it is equivalent to, and can thus be exchanged
              for, any other dollar bill. In contrast, a non-fungible token is a
              unique asset in digital form that cannot be exchanged for any
              other NFT. This means that every NFT is a 'one-of-a-kind' item.
              NFTs are transferred from one owner to another using blockchain
              technology, which creates a digital trail from seller to buyer
              that verifies the transaction. This encodes the unique ownership
              rights to the buyer (new owner).
            </Col>

            <Col className="col-text-heading">
              The physical world counterpart would be a unique collectible asset
              such as a piece of art, for which you might have a certificate of
              ownership attesting to its authenticity. The NFT with its
              blockchain technology replaces the need for certificates of
              ownership. There are even some NFTs that use blockchain technology
              to create a digital ownership certificate for a unique physical
              asset, though this is currently not common.
            </Col>
            <Col className="col-text-heading">
              NFTs became a popular investment in 2021, even though they’ve been
              around since 2014. As cryptocurrency investing exploded, so did
              the idea of taking certain digital assets and selling them to
              investors to buy online.
            </Col>
          </Col>
          <Title level={2} className="max-heading-nft">
            NFTs collections
          </Title>
        </div>
        <Row gutter={[16, 16]} className="nft-card-container">
          {nftsList.map((e) => {
            return <CardDetail datas={e} />;
          })}
        </Row>
      </div>
    </>
  );
};

export default Nft;
