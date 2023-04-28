import React from "react";
import style from "./Cards.module.css";
import { NavLink } from "react-router-dom";
import Card from "../Card/Card";

const Cards = (props) => {
  return (
    <div className={style.containerCards}>
      <div className={style.containerCard}>
        <Card />
      </div>

      <div className={style.containerCard}>
        <Card />
      </div>
      <div className={style.containerCard}>
        <Card />
      </div>
      <div className={style.containerCard}>
        <Card />
      </div>
    </div>
  );
};

export default Cards;
