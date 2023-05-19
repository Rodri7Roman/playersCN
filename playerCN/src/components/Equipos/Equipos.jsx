import React from "react";
import style from "./Equipos.module.css";
import NavBar from "../Navbar/NavBar";
import Prompt from "../Home/Prompt/Prompt";
import Posts from "../Posts/Posts";
import Cards from "./Cards/Cards";
import { NavLink } from "react-router-dom";

const Equipos = (props) => {
  return (
    <div className={style.containerPpal}>
      <NavBar />
      <div className={style.containerEquipos}>
        <div className={style.containerSearch}>
          <NavLink to={"/equipos"} className={style.search}>
            BUSCADOR DE EQUIPOS
          </NavLink>
        </div>
        <Cards />
      </div>
      <h1 className={style.s}>KJASD</h1>
    </div>
  );
};

export default Equipos;
