import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css";
import NavBar from "../Navbar/NavBar";
import Prompt from "./Prompt/Prompt";
import Posts from "../Posts/Posts";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../redux/actions/users/user";
import { getPosts } from "../../redux/actions/posts/posts";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/ingresar");
    dispatch(getUser(token));
    dispatch(getPosts());
  }, []);

  return (
    <>
      {!token ? (
        ""
      ) : (
        <div className={style.containerPpal}>
          <NavBar />
          <div className={style.containerHome} id="inicio">
            <div className={style.containerInicio}>
              <a href="#inicio" className={style.linkInicio}>
                Inicio
              </a>
            </div>

            <Prompt />
            <Posts posts={posts} />
          </div>
          <h1 className={style.s}>KJASD</h1>
        </div>
      )}
    </>
  );
};

export default Home;
