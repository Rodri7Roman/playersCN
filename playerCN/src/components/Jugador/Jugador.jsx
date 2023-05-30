import React from "react";
import style from "./Jugador.module.css";
import NavBar from "../Navbar/NavBar";
import { NavLink, useLocation } from "react-router-dom";
import Profile from "./Profile/Profile";
import { useSelector } from "react-redux";

const Jugador = (props) => {
  const location = useLocation();
  return (
    <div className={style.containerPpal}>
      <NavBar />
      <div className={style.containerJugador} id="inicio">
        <div className={style.containerInicio}>
          <a href="#inicio" className={style.linkInicio}>
            {props.user.username}
          </a>
        </div>
        <div>
          <Profile user={props.user} />
        </div>
      </div>
      <h1 className={style.tercerSeccion}>KJASD</h1>
    </div>
  );
};

export default Jugador;
