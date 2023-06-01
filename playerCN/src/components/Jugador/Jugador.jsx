import React, { useEffect, useState } from "react";
import style from "./Jugador.module.css";
import NavBar from "../Navbar/NavBar";
import Profile from "./Profile/Profile";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUsername } from "../../redux/actions/posts/posts";
import axios from "axios";

const Jugador = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { username } = useParams();
  const [userVisited, setUserVisited] = useState({});
  const postsUser = useSelector((state) => state.postsUser);
  useEffect(() => {
    if (location.pathname !== "/perfil") {
      dispatch(getPostsByUsername(username));

      (async () => {
        try {
          const json = await axios.get(`/users/${username}?queryType=username`);
          setUserVisited(json.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  return (
    <div className={style.containerPpal}>
      <NavBar />
      <div className={style.containerJugador} id="inicio">
        <div className={style.containerInicio}>
          <a href="#inicio" className={style.linkInicio}>
            {location.pathname === "/perfil" ? props.user.username : userVisited.username}
          </a>
        </div>
        <div>
          <Profile
            user={location.pathname === "/perfil" ? props.user : userVisited}
            posts={location.pathname === "/perfil" ? props.posts : postsUser}
          />
        </div>
      </div>
      <h1 className={style.tercerSeccion}>KJASD</h1>
    </div>
  );
};

export default Jugador;
