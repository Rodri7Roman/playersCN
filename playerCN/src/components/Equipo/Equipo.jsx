import React from "react";
import style from "./Equipo.module.css";
import NavBar from "../Navbar/NavBar";
import Prompt from "../Home/Prompt/Prompt";
import { NavLink } from "react-router-dom";
import Profile from "./Profile/Profile";

const Equipo = (props) => {
  return (
    <div>
      <NavBar />
      <div className={style.containerEquipo} id="inicio">
        <div className={style.containerInicio}>
          <a href="#inicio" className={style.linkInicio}>
            Imperial
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

export default Equipo;
