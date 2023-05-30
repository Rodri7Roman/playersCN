import React, { useEffect } from "react";
import style from "./Jugador.module.css";
import NavBar from "../Navbar/NavBar";
import Profile from "./Profile/Profile";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUsername } from "../../redux/actions/posts/posts";

const Jugador = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { username } = useParams();

  const postsUser = useSelector((state) => state.postsUser);
  useEffect(() => {
    if (location.pathname !== "/perfil") dispatch(getPostsByUsername(username));
  }, []);

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
          <Profile
            user={location.pathname === "/perfil" ? props.user : ""}
            posts={location.pathname === "/perfil" ? props.posts : postsUser}
          />
        </div>
      </div>
      <h1 className={style.tercerSeccion}>KJASD</h1>
    </div>
  );
};

export default Jugador;
