import React from "react";
import style from "./Cards.module.css";
import { NavLink } from "react-router-dom";
import Card from "../Card/Card";

const Cards = (props) => {
  return (
    <div className={style.containerCards}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
