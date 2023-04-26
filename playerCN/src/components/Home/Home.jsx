import React from "react";
import style from "./Home.module.css";
import NavBar from "../Navbar/NavBar";
import Post from "./Post/Post";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={style.containerHome}>
        <Post />
      </div>
    </div>
  );
};

export default Home;
