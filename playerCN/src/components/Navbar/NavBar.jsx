import React from "react";
import logo from "../../assets/icons/Logo_GC2.svg";
import style from "./NavBar.module.css";
import homeIcon from "../../assets/icons/home.svg";
import messagesIcon from "../../assets/icons/messages.svg";
import notis from "../../assets/icons/notis.svg";

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
            <a href="" className={`nav-link ${style.containerTextLinkNav}`}>
              <box-icon name="home-alt-2" color="#ffffff"></box-icon>
              <p className={style.textIcon}>Inicio</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className={`nav-link ${style.containerTextLinkNav}`}>
              <box-icon name="group" color="#ffffff"></box-icon>
              <p className={style.textIcon}>Equipos</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className={`nav-link ${style.containerTextLinkNav}`}>
              <box-icon name="joystick" color="#ffffff"></box-icon>
              <p className={style.textIcon}>Jugadores</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className={`nav-link ${style.containerTextLinkNav}`}>
              <box-icon name="message" color="#ffffff"></box-icon>
              <p className={style.textIcon}>Mensajes</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className={`nav-link ${style.containerTextLinkNav}`}>
              <box-icon name="bell" color="#ffffff"></box-icon>
              <p className={style.textIcon}>Notificaciones</p>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className={`nav-link ${style.containerTextLinkNav}`}>OTRA COSA</p>
      </div>
    </nav>
  );
};

export default NavBar;
