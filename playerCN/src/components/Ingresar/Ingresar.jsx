import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Ingresar.module.css";
import logo from "../../assets/icons/logo.png";
import robot from "../../assets/imgs/robot2.png";
import { NavLink } from "react-router-dom";
import { validate } from "./validator";
import { ingresar } from "../../redux/actions/users/user";
const Ingresar = (props) => {
  const dispatch = useDispatch();
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [inputErrors, setInputErrors] = useState({});

  useEffect(() => {
    if (Object.keys(inputErrors).length === 0 && isSubmit) {
      dispatch(ingresar(inputs));
    }
  }, [inputErrors]);

  // ---------- HANDLE CHANGE -------------
  const handleChange = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // ---------- SUBMIT INGRESAR -------------

  const submitIngresar = (event) => {
    event.preventDefault();
    setInputErrors(validate(inputs));
    setIsSubmit(true);
  };
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
            <button onClick={submitIngresar} className={style.buttonIniciar}>
              Iniciar Sesión
            </button>
            <NavLink to={"/registrarse"}>
              <button className={style.buttonRegister}>Registrarse </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ingresar;
