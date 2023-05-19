import React from "react";
import style from "./Jugadores.module.css";
import NavBar from "../Navbar/NavBar";
import { NavLink } from "react-router-dom";
import Filters from "./Filters/Filters";
import Cards from "./Cards/Cards";

const Jugadores = () => {
  return (
    <div className={style.containerPpal}>
      <NavBar />
      <div className={style.containerJugadores}>
        <div className={style.containerSearch}>
          <NavLink to={"/jugadores"} className={style.search}>
            BUSCADOR DE JUGADORES
          </NavLink>
        </div>
        {/* <Filters /> */}
        <div className={style.containerCards}>
          <Cards />
        </div>
      </div>
      <div>
        <h1 className={style.s}>KJASD</h1>
      </div>
    </div>
  );
};

export default Jugadores;
