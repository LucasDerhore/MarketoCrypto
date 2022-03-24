import React, { useState, useEffect } from "react";
import { Card } from "antd";
import "./CardDetail.scss";

function CardDetail(props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(props["data-key"].toString().padStart(2, "0"));
  });

  return (
    <Card className="nft-card">
      <div className="card-image-container">
        <img src={`/image${index}.png`} />
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
