import React, { useEffect, useState } from "react";
import style from "./Post.module.css";
import logo from "../../assets/imgs/logoEquipo2.png";
import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import useSWR from "swr";
import { getUserById } from "../../redux/actions/users/user";

const Post = (props) => {
  const location = useLocation();

  const { data, isLoading } = useSWR(`users/${props.userId}`, () =>
    getUserById(props.userId)
  );
  if (isLoading) {
    return <span>Loading...</span>;
  }

  const { username, admin, email, id, name } = data.data;

  const formatContent = (content) => {
    const lines = content?.split("\n");
    return lines?.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <>
      <NavLink to={`/post/${props.postId}`} className={style.containerPost}>
        <div className={style.containerPpal}>
          <div className={style.containerUserContent}>
            <div>
              <img src={logo} alt="" className={style.imgUser} />
            </div>
            <div className={style.content}>
              <NavLink
                to={`/jugadores/${username}`}
                className={style.linkNameUser}
              >
                {name} <span className={style.arroba}>@{username}</span>
              </NavLink>
              <p className={style.contentPost}>
                {formatContent(props.content)}
              </p>
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
      </NavLink>
    </>
  );
};

export default Post;
