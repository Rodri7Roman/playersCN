import React from "react";
import style from "./Register.module.css";

const Register = () => {
  return (
    <div className={style.containerRegister}>
      <div className={style.containerForm}>
        <form action="" className={style.form}>
          <div>
            <label htmlFor="" className={style.labelRegister}>
              Correo Electrónico:{" "}
            </label>
            <input type="text" className={style.inputRegister} />
          </div>
          <div>
            <label htmlFor="" className={style.labelRegister}>
              Username:{" "}
            </label>
            <input type="text" className={style.inputRegister} />
          </div>
          <div>
            <label htmlFor="" className={style.labelRegister}>
              Contraseña:{" "}
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
