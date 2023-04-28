import React from "react";
import style from "./Prompt.module.css";
import user from "../../../assets/icons/user.png";
import perfil from "../../../assets/imgs/logoEquipo.jpg";

const Prompt = (props) => {
  return (
    <div className={style.PostContainer}>
      <div className={style.fotoUsuario}>
        <img src={perfil} alt="" className={style.imgPerfil} />
      </div>
      <div className={style.containerTextArea}>
        <textarea
          name="prompt"
          id="prompt"
          rows={4}
          placeholder="¿Qué estás pensando?"
        ></textarea>
        <div className={style.containerEnviarIcon}>
          <div className={style.containerIcon}>
            <box-icon name="image-alt" color="#1E3748"></box-icon>
          </div>

          <div className={style.containerEnviar}>
            <button type="submit">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
