import React from "react";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { Link } from "react-router-dom";
import "./CardDetail.scss";

function CardDetail(props) {
  console.log(props);

  return (
    <Card className="nft-card">
      <a href={props.datas.collection_url}>
        <h2>{props.datas.collection_name}</h2>
      </a>
      <h3>Floor : {props.datas.floor}</h3>
      <p>Volume : {props.datas.volume}$</p>
    </Card>
  );
}

export default CardDetail;
