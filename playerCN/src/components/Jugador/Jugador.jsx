import React from "react";
import style from "./Jugador.module.css";
import NavBar from "../Navbar/NavBar";
import { NavLink } from "react-router-dom";
import Profile from "../Equipo/Profile/Profile"

const Jugador = (props) => {
  return (
    <div>
      <NavBar />
      <div className={style.containerJugador} id="inicio">
        <div className={style.containerInicio}>
          <a href="#inicio" className={style.linkInicio}>
            NameUser
          </a>
        </div>
        <div>
          <Profile />
        </div>
      </div>
      <h1 className={style.tercerSeccion}>KJASD</h1>
    </div>
  );
};

export default Jugador;
