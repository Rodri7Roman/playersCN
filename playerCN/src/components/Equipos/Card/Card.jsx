import React from "react";
import style from "./Card.module.css";
import banner from "../../../assets/imgs/banner.jpg";
import banner2 from "../../../assets/imgs/banner2.png";
import logoEquipo from "../../../assets/imgs/logoEquipo.jpg";
import logoEquipo2 from "../../../assets/imgs/logoEquipo2.png";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={style.containerCard}>
      <div>
        <img src={banner2} alt="" className={style.imgBanner} />
      </div>
      <div className={style.containerLogo}>
        <img src={logoEquipo2} alt="" />
      </div>
      <div className={style.containerName}>
        <h1>Nombre de Equipo</h1>
      </div>
      <div className={style.containerDescription}>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          consectetur quaerat laborum id rerum quidem minus saepe obcaecati
          repellat porro vitae asperiores
        </h2>
      </div>
      <div className={style.containerFollow}>
        <button>Seguir</button>
      </div>
    </div>
  );
};

export default Card;
