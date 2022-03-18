import React from "react";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { Link } from "react-router-dom";

function CardDetail(props) {
  console.log(props);

  return (
    <div className="maCard">
      <div className="collection-name">{props.datas.collection_name}</div>
      <a href={props.datas.collection_url}>Aller vers la collection</a>
      <div className="collection-floor">{props.datas.floor}</div>
      <div className="collection-volume">{props.datas.volume}$</div>
    </div>
  );
}

export default CardDetail;
