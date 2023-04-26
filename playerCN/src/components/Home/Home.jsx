import React from "react";
import style from "./Home.module.css";
import NavBar from "../Navbar/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={style.containerHome}>
        <h1>DJKASDKAs</h1>
      </div>
    </div>
  );
};

export default Home;
