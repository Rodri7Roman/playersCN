import React, { useEffect, useState } from "react";
import style from "./Ingresar.module.css";
import logo from "../../assets/icons/logo_GC2.png";
import robot from "../../assets/imgs/robot2.png";
import { NavLink } from "react-router-dom";

const Ingresar = (props) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [inputErrors, setInputErrors] = useState({});

  // ---------- HANDLE CHANGE -------------
  const handleChange = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // ---------- SUBMIT INGRESAR -------------

  return (
    <div className={style.containerRegister}>
      <div className={style.containerLogo}>
        <img src={robot} alt="" />
      </div>
      <div className={style.containerForm}>
        <form action="" className={style.form}>
          <div className={style.containerLogoForm}>
            <img src={logo} alt="logoGC" />
            <p className={style.textLogo}>GamersConnect</p>
          </div>

          <div className={style.containerInputLabel}>
            <label htmlFor="" className={style.labelRegister}>
              Nombre de usuario{" "}
            </label>
            <input
              type="text"
              name="username"
              value={inputs.username}
              className={style.inputRegister}
              onChange={handleChange}
            />
            <span className={style.span}>{inputErrors.username}</span>
          </div>
          <div className={style.containerInputLabel}>
            <label htmlFor="" className={style.labelRegister}>
              Contraseña{" "}
            </label>
            <input
              type="password"
              name="password"
              value={inputs.password}
              className={style.inputRegister}
              onChange={handleChange}
            />
            <span className={style.span}>{inputErrors.password}</span>
          </div>
          <div className={style.containerButtons}>
            <NavLink to={"/registrarse"}>
              <button className={style.buttonRegister}>Registrarse </button>
            </NavLink>

            <NavLink to={"/ingresar"}>
              <button className={style.buttonIniciar}>Iniciar Sesión</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ingresar;
