import React from "react";
import style from "./Home.module.css";
import NavBar from "../Navbar/NavBar";
import Prompt from "./Prompt/Prompt";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={style.containerHome}>
        <Prompt />
        <Posts />
      </div>
      <h1 className={style.s}>KJASD</h1>
    </div>
  );
};

export default Home;
