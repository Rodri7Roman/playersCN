import React from "react";
import style from "./EditProfileModal.module.css";

const EditProfileModal = () => {
  return (
    <div
      className={`modal fade`}
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className={`${style.contentModal} modal-content`}>
          <div className="modal-header">
            <h1 className="modal-title" id="exampleModalLabel">
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
              <input type="text" />
            </div>
            <div className={style.containerInputLabel}>
              <label htmlFor="">Nombre de usuario</label>
              <input type="text" />
            </div>
            <div className={style.containerInputLabel}>
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div className={style.containerInputLabel}>
              <label htmlFor="">Contraseña</label>
              <input type="text" />
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
            <button type="button" className={style.buttonClose}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
