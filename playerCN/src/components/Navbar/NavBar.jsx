import React from "react";
import logo from "../../assets/icons/Logo_GC2.svg";
import style from "./NavBar.module.css";
import homeIcon from "../../assets/icons/home.svg";
import messagesIcon from "../../assets/icons/messages.svg";
import notis from "../../assets/icons/notis.svg";
import "./style.css";

const NavBar = (props) => {
  return (
    <nav className={`${style.navBar}  ${style.bg}`}>
      <div className={style.containerLogo}>
        <a className={`navbar-brand ${style.textLinkNav}`} href="#">
          <img src={logo} alt="logoGC" />
          <p>GamersConnect</p>
        </a>
      </div>

      <div className={style.flexNav}>
        <ul className={`navbar-nav ${style.navBarNav}`}>
          <li className="nav-item">
            <a href="" className={`nav-link ${style.textLinkNav}`}>
              <box-icon name="home-alt-2" color="#ffffff"></box-icon>
              <p>Inicio</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className={`nav-link ${style.textLinkNav}`}>
              <box-icon name="message" color="#ffffff"></box-icon>
              <p>Mensajes</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className={`nav-link ${style.textLinkNav}`}>
              <box-icon name="bell" color="#ffffff"></box-icon>
              <p>Notificaciones</p>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className={`nav-link ${style.textLinkNav}`}>OTRA COSA</p>
      </div>
    </nav>
  );
};

export default NavBar;
