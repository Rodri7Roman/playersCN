import React, { useState } from "react";
import { useEffect } from "react";
import style from "./EditProfileModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { validator } from "./validator";
import { updateUsername, updateName } from "../../redux/actions/users/user";

const EditProfileModal = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [isSubmit, setIsSubmit] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [inputErrors, setInputErrors] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (Object.keys(inputErrors).length === 0 && isSubmit) {
      if (inputs.username !== user.username && inputs.username !== "") {
        dispatch(updateUsername(token, inputs.username));
        window.location.reload();
      }
      if (inputs.name !== user.name && inputs.name !== "") {
        dispatch(updateName(token, inputs.name));
        window.location.reload();
      }
    }
  }, [inputErrors]);

  const onSubmitSave = (e) => {
    console.log(inputs);
    setInputErrors(validator(inputs, user));
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`modal fade`}
      id="editModal"
      tabIndex="-1"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className={`${style.contentModal} modal-content`}>
          <div className="modal-header">
            <h1 className="modal-title" id="editModalLabel">
              Editar Perfil
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className={style.containerInputLabel}>
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                onChange={handleChange}
                placeholder={user.name}
                value={inputs.name}
                name="name"
              />
              <span className={style.span}>{inputErrors.name}</span>
            </div>
            <div className={style.containerInputLabel}>
              <label htmlFor="">Nombre de usuario</label>
              <input
                type="text"
                onChange={handleChange}
                placeholder={user.username}
                value={inputs.username}
                name="username"
              />
              <span className={style.span}>{inputErrors.username}</span>
            </div>
            <div className={style.containerInputLabel}>
              <label htmlFor="">Email</label>
              <input
                type="text"
                onChange={handleChange}
                placeholder={user.email}
                value={inputs.email}
                name="email"
              />
              <span className={style.span}>{inputErrors.email}</span>
            </div>
            <div className={style.containerInputLabel}>
              <label htmlFor="">Contraseña</label>
              <input
                type="password"
                onChange={handleChange}
                name="password"
                value={inputs.password}
              />
              <span className={style.span}>{inputErrors.password}</span>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className={style.buttonClose}
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button className={style.buttonClose} onClick={onSubmitSave}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
