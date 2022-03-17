import React, { useState } from "react";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

import { useGetNftQuery } from "../../services/cryptoNft";
import CardDetail from "../CardDetail/CardDetail";

const { Title } = Typography;

const Nft = ({ simplified }) => {
  // const { data: nftsList, isFetching } = useGetNftQuery({});

  const nftsList = [
    {
      collection_name: "a",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "Bored Ape Yacht Club",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "c",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "d",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "e",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "f",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "g",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "h",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "i",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "j",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "k",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "l",
      collection_url: "google.com",
      floor: 986,
      volume: 132456,
    },
    {
      collection_name: "m",
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
          <p>
            NFT stands for 'non-fungible token'. When something is fungible,
            like a dollar bill, it is equivalent to, and can thus be exchanged
            for, any other dollar bill. In contrast, a non-fungible token is a
            unique asset in digital form that cannot be exchanged for any other
            NFT. This means that every NFT is a 'one-of-a-kind' item. NFTs are
            transferred from one owner to another using blockchain technology,
            which creates a digital trail from seller to buyer that verifies the
            transaction. This encodes the unique ownership rights to the buyer
            (new owner).
            <br />
            <br />
            The physical world counterpart would be a unique collectible asset
            such as a piece of art, for which you might have a certificate of
            ownership attesting to its authenticity. The NFT with its blockchain
            technology replaces the need for certificates of ownership. There
            are even some NFTs that use blockchain technology to create a
            digital ownership certificate for a unique physical asset, though
            this is currently not common.
            <br />
            <br />
            NFTs became a popular investment in 2021, even though they’ve been
            around since 2014. As cryptocurrency investing exploded, so did the
            idea of taking certain digital assets and selling them to investors
            to buy online.
          </p>
          <Title level={2} className="max-heading-nft">
            NFTs
          </Title>
        </div>
        <div className="nft-card-container">
          {nftsList.map((e) => {
            // t'as un exemple du retour de l'api ?
            return <CardDetail datas={e} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Nft;
