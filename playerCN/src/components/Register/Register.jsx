import React, { useEffect, useState } from "react";
import style from "./Register.module.css";
import logo from "../../assets/icons/logo_GC2.png";
import { NavLink } from "react-router-dom";
import { getUser, registerUser } from "../../redux/actions/users/user";
import { useDispatch } from "react-redux";
import { validate } from "./validator";

const Register = () => {
  const dispatch = useDispatch();
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [inputErrors, setInputErrors] = useState({});

  useEffect(() => {
    if (Object.keys(inputErrors).length === 0 && isSubmit) {
      dispatch(registerUser(inputs));
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

  // ---------- SUBMIT REGISTER -------------
  const submitRegister = (event) => {
    event.preventDefault();
    setInputErrors(validate(inputs));
    setIsSubmit(true);
    // setInputs({ email: "", username: "", password: "" });
  };

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
            <input
              type="text"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              className={style.inputRegister}
            />
            <span className={style.span}>{inputErrors.email}</span>
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
            <button onClick={submitRegister} className={style.buttonRegister}>
              Registrarse
            </button>
            <NavLink to={"/ingresar"}>
              <button className={style.buttonIniciar}>Iniciar Sesión</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
