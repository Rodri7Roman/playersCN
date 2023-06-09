import React from "react";
import style from "./ButtonBasic.module.css";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
const ButtonBasic = () => {
  return (
    <>
      <div
        className={`${style.containerButton}`}
        data-bs-toggle="modal"
        data-bs-target="#editModal"
      >
        <button>Ajustes</button>
      </div>
      <EditProfileModal />
    </>
  );
};

export default ButtonBasic;
