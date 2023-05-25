import React from "react";
import { useEffect } from "react";
import logo from "../../assets/icons/logo.png";
import style from "./NavBar.module.css";
import perfil from "../../assets/imgs/logoEquipo.jpg";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/actions/users/user";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(getUser(token));
  }, []);
  return (
    <nav className={`${style.navBar}  ${style.bg}`}>
      <div className={style.containerLogo}>
        <a className={`navbar-brand ${style.containerTextLinkLogo}`} href="#">
          <img src={logo} alt="logoGC" />
          <p className={style.textLogo}>GamersConnect</p>
        </a>
      </div>

      <div className={style.flexNav}>
        <ul className={`navbar-nav ${style.navBarNav}`}>
          <li className="nav-item">
            <NavLink
              to={"/"}
              className={`nav-link ${style.containerTextLinkNav}`}
            >
              <box-icon name="home-alt-2" color="#ffffff"></box-icon>
              <p className={style.textIcon}>Inicio</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/equipos"}
              className={`nav-link ${style.containerTextLinkNav}`}
            >
              <box-icon name="group" color="#ffffff"></box-icon>
              <p className={style.textIcon}>Equipos</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/jugadores"}
              className={`nav-link ${style.containerTextLinkNav}`}
            >
              <box-icon name="joystick" color="#ffffff"></box-icon>
              <p className={style.textIcon}>Jugadores</p>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to={"/notificaciones"}
              href=""
              className={`nav-link ${style.containerTextLinkNav}`}
            >
              <box-icon name="bell" color="#ffffff"></box-icon>
              <p className={style.textIcon}>Notificaciones</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <NavLink
          to={"/perfil"}
          className={`nav-link ${style.containerInfoUser}`}
        >
          {" "}
          <div className={style.ContainerFotoUsuario}>
            <img src={perfil} alt="" className={style.imgPerfil} />
            <div className={style.containerNameUserNavBar}>
              <div className={style.containerUsername}>
                <h2>
                  {user.username?.charAt(0).toUpperCase() +
                    user.username?.slice(1)}
                </h2>
                <h3>{user?.email}</h3>
              </div>

              <div className={style.containerIconSettings}>
                <box-icon
                  type="solid"
                  name="cog"
                  color="var(--color-grey)"
                ></box-icon>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
