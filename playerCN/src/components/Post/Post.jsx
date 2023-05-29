import React from "react";
import style from "./Post.module.css";
import user from "../../assets/icons/user.png";
import logo from "../../assets/imgs/logoEquipo2.png";
import fire from "../../assets/imgs/banner2.png";
const Post = (props) => {
  return (
    <div className={style.containerPost}>
      <div className={style.containerUserContent}>
        <div>
          <img src={logo} alt="" className={style.imgUser} />
        </div>
        <div className={style.content}>
          <span className={style.nameUser}>
            {props.userId}{" "}
            <span className={style.arroba}>@ImperialGaming_</span>
          </span>
          <p className={style.contentPost}>{props.title}</p>
          <p className={style.contentPost}>{props.content}</p>
          {/* <div className={style.flexImgs}>
            <img src={fire} alt="" className={style.imgContent} />
          </div> */}
        </div>
      </div>
      <div className={style.containerReactions}>
        <div>
          <p className={style.textReactions}>123</p>
          <box-icon name="heart" color="#818486"></box-icon>
          <p className={style.textReactions}>Me gusta</p>
        </div>
        <div>
          <p className={style.textReactions}>123</p>
          <box-icon name="comment" color="#818486"></box-icon>
          <p className={style.textReactions}>Comentar</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
