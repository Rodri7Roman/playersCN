import React from "react";
import logo from "../../assets/icons/Logo_GC2.svg";
import style from "./NavBar.module.css";
import homeIcon from "../../assets/icons/home.svg";
import messagesIcon from "../../assets/icons/messages.svg";
import "./style.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="logo-container">
            <a class="navbar-brand" href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <ul className={` ${style.navBarNav} navbar-nav me-auto mb-2 mb-lg-0`}>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                <img src={homeIcon} alt="" className={style.imgLogo} />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img src={messagesIcon} alt="" className={style.imgLogo} />
              </a>
            </li>
          </ul>
          <div>
            OTRA COSA
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
