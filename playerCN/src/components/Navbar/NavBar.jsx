import React from "react";
import logo from "../../assets/icons/Logo_GC2.svg";
import style from "./NavBar.module.css";
import perfil from "../../assets/imgs/logoEquipo.jpg";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
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
        <NavLink className={`nav-link ${style.containerInfoUser}`}>
          {" "}
          <div className={style.ContainerFotoUsuario}>
            <img src={perfil} alt="" className={style.imgPerfil} />
            <div className={style.containerNameUserNavBar}>
              <h2>Imperials</h2>
              <h3>@ImperialGaming_</h3>
            </div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
