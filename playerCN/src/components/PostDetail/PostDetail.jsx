import React from "react";
import style from "./PostDetail.module.css";
import NavBar from "../Navbar/NavBar";
import { NavLink } from "react-router-dom";

const PostDetail = () => {
  return (
    <div className={style.containerPpal}>
      <NavBar />
      <div className={style.containerJugadores}>
        <div className={style.containerSearch}>
          <NavLink to={"/"} className={style.search}>
            BUSCADOR DE JUGADORES
          </NavLink>
        </div>
        {/* <Filters /> */}
        <div className={style.containerPost}></div>
      </div>
      <div>
        <h1 className={style.s}>KJASD</h1>
      </div>
    </div>
  );
};

export default PostDetail;
