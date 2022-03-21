import React from "react";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { Link } from "react-router-dom";
import TableImages from "../../components/TableImage/TableImage";
import "./CardDetail.scss";

const { Text, Title } = Typography;

function CardDetail(props) {
  // const images = [];
  // for (let i = 0; i <= 13; i++) {
  //   images.push(<TableImages key={`{$i}`} />);
  // }
  // return images;

  //console.log(props);

  return (
    <Card className="nft-card">
      <div className="card-image-container">
        <img src="/image02.png" />
      </div>
      <a href={props.datas.collection_url}>
        <h2>{props.datas.collection_name}</h2>
      </a>
      <div className="card-image-body">
        <h3>Floor : {props.datas.floor}</h3>
        <p>Volume : {props.datas.volume}$</p>
      </div>
      <p className="style-p">CryptoMarketo</p>
    </Card>
  );
}

export default CardDetail;
