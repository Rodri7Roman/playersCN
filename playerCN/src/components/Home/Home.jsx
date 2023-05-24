import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Home.module.css";
import NavBar from "../Navbar/NavBar";
import Prompt from "./Prompt/Prompt";
import Posts from "../Posts/Posts";
import { NavLink } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.token);
  console.log(user);
  return (
    <div className={style.containerPpal}>
      <NavBar />
      <div className={style.containerHome} id="inicio">
        <div className={style.containerInicio}>
          <a href="#inicio" className={style.linkInicio}>
            Inicio
          </a>
        </div>

        <Prompt />
        <Posts />
      </div>
      <h1 className={style.s}>KJASD</h1>
    </div>
  );
};

export default Home;
