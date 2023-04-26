import React from "react";
import style from "./Post.module.css";
import user from "../../../assets/icons/user.png";
const Post = (props) => {
  return (
    <div className={style.PostContainer}>
      <div className={style.fotoUsuario}>
        <img src={user} alt="" />
      </div>
      <div className={style.containerTextArea}>
        <textarea
          name="post"
          id="post"
          rows={8}
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

export default Post;
