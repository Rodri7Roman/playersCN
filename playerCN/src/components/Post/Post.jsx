import React from "react";
import style from "./Post.module.css";
import user from "../../assets/icons/user.png";

const Post = (props) => {
  return (
    <div className={style.containerPost}>
      <div className={style.containerUserContent}>
        <div>
          <img src={user} alt="" className={style.imgUser} />
          <span className={style.nameUser}>Nombre de Usuario</span>
        </div>
        <div>
          <p className={style.contentPost}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium libero earum ipsum alias illo. Dolores mollitia nulla
            magni nobis reprehenderit suscipit, impedit eligendi quidem aperiam
            earum blanditiis cum quam commodi!
          </p>
        </div>
      </div>
      <div className={style.containerReactions}>
        <div>
          <p className={style.textReactions}>123</p>
          <box-icon name="heart" color="#ffffff"></box-icon>
          <p className={style.textReactions}>Me gusta</p>
        </div>
        <div>
          <p className={style.textReactions}>123</p>
          <box-icon name="comment" color="#ffffff"></box-icon>
          <p className={style.textReactions}>Comentar</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
