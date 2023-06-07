import React from "react";
import style from "./Prompt.module.css";
import user from "../../../assets/icons/user.png";
import perfil from "../../../assets/imgs/logoEquipo.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postComment, postPost } from "../../../redux/actions/posts/posts";
import { useParams } from "react-router-dom";
import { validate } from "../../Home/Prompt/validate";

const Prompt = (props) => {
  const dispatch = useDispatch();
  const { idPost } = useParams();
  const token = localStorage.getItem("token");
  const [inputErrors, setInputErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [input, setInput] = useState({
    post: "",
  });

  useEffect(() => {
    if (Object.keys(inputErrors).length === 0 && isSubmit) {
      dispatch(postComment(input.post, token, idPost));
    }
  }, [inputErrors]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitPost = (e) => {
    e.preventDefault();
    setInputErrors(validate(input));
    setIsSubmit(true);
  };

  const textarea = document.querySelector("#post");
  textarea?.addEventListener("keyup", (e) => {
    textarea.style.height = "60px";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight + 30}px`;
    if (scHeight > 300) {
      textarea.classList.add(`${style.textAct}`);
    } else {
      textarea.classList.remove(`${style.textAct}`);
    }
  });

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
          placeholder="Publica tu respuesta..."
          value={input.post}
        ></textarea>
        <span className={style.span}>{inputErrors.post}</span>
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
