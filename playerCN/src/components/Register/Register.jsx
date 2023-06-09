import React, { useEffect, useState } from "react";
import style from "./Register.module.css";
import logo from "../../assets/icons/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/actions/users/user";
import { useDispatch } from "react-redux";
import { validate } from "./validator";
import robot from "../../assets/imgs/robot1.png";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [inputErrors, setInputErrors] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/");
  }, []);

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
    <>
      {!token ? (
        <div className={style.containerRegister}>
          <span className={style.spanContainer}></span>
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
                <button
                  onClick={submitRegister}
                  className={style.buttonRegister}
                >
                  Registrarse
                </button>
                <NavLink to={"/ingresar"}>
                  <button className={style.buttonIniciar}>
                    Iniciar Sesión
                  </button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Register;
