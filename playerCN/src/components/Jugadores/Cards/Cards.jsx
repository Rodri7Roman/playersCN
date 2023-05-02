import React from "react";
import style from "./Cards.module.css";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className={style.containerCards}>
      <div>
        <Card />
      </div>{" "}
      <div>
        <Card />
      </div>{" "}
      <div>
        <Card />
      </div>{" "}
      <div>
        <Card />
      </div>{" "}
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Cards;
