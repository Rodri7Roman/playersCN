import React from "react";
import style from "./Jugador.module.css";
import NavBar from "../Navbar/NavBar";
import Profile from "./Profile/Profile";

const Jugador = (props) => {
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
          <Profile user={props.user} posts={props.posts} />
        </div>
      </div>
      <h1 className={style.tercerSeccion}>KJASD</h1>
    </div>
  );
};

export default Jugador;
