import React from "react";
import style from "./Card.module.css";
import banner from "../../../assets/imgs/banner2.png";
import perfil from "../../../assets/imgs/logoEquipo.jpg";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <article className={style.containerCard}>
      <NavLink to={"1"}>
        <div className={style.containerHeader}>
          <div className={style.containerBanner}>
            <img src={banner} alt="banner" className={style.banner} />
          </div>
          <div className={style.containerFotoPerfil}>
            <img src={perfil} alt="foto_perfil" className={style.fotoPerfil} />
          </div>
        </div>
      </NavLink>

      <div className={style.containerContent}>
        <NavLink to={"1"} className={style.navLink}>
          {" "}
          <h1 className={style.nameUser}>
            NameUser 
          </h1><span className={style.arroba}>@NameUser_</span>
          <h2 className={style.content}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            soluta accusamus rerum minus...
          </h2>
        </NavLink>

        <div className={style.containerFollow}>
          <button>Seguir</button>
        </div>
      </div>
    </article>
  );
};

export default Card;
