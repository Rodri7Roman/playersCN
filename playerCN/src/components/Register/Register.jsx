import React from "react";
import style from "./Register.module.css";
import logo from "../../assets/icons/logo_GC2.png";
import "./register.css";

const Register = () => {
  return (
    <div className={style.containerRegister}>
      <div className={style.containerLogo}></div>
      <div className={style.containerForm}>
        <form action="" className={style.form}>
          <div className={style.containerLogoForm}>
            <img src={logo} alt="logoGC" />
            <p className={style.textLogo}>GamersConnect</p>
          </div>
          <div className={style.containerInputLabel}>
            <label htmlFor="" className={style.labelRegister}>
              Correo Electrónico{" "}
            </label>
            <input type="text" className={style.inputRegister} />
          </div>
          <div className={style.containerInputLabel}>
            <label htmlFor="" className={style.labelRegister}>
              Nombre de usuario{" "}
            </label>
            <input type="text" className={style.inputRegister} />
          </div>
          <div className={style.containerInputLabel}>
            <label htmlFor="" className={style.labelRegister}>
              Contraseña{" "}
            </label>
            <input type="text" className={style.inputRegister} />
          </div>
          <button className={style.buttonRegister}>Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
