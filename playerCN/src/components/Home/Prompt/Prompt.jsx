import React from "react";
import style from "./Prompt.module.css";
import user from "../../../assets/icons/user.png";
import perfil from "../../../assets/imgs/logoEquipo.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postPost } from "../../../redux/actions/posts/posts";

const Prompt = (props) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [input, setInput] = useState({
    post: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitPost = (e) => {
    e.preventDefault();
    dispatch(postPost(input.post, token));
  };

  return (
    <div className={style.PostContainer}>
      <div className={style.fotoUsuario}>
        <img src={perfil} alt="" className={style.imgPerfil} />
      </div>
      <div className={style.containerTextArea}>
        <textarea
          onChange={handleChange}
          name="post"
          id="post"
          rows={4}
          placeholder="Qué estás pensando?"
          value={input.post}
        ></textarea>
        <div className={style.containerEnviarIcon}>
          <div className={style.containerIcon}>
            <box-icon name="image-alt" color="#1E3748"></box-icon>
          </div>

          <div className={style.containerEnviar}>
            <button type="submit" onClick={submitPost} className={style.active}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
