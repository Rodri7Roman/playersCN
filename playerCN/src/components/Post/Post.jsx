import React, { useEffect, useState } from "react";
import style from "./Post.module.css";
import user from "../../assets/icons/user.png";
import logo from "../../assets/imgs/logoEquipo2.png";
import fire from "../../assets/imgs/banner2.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const Post = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const json = await axios.get(`/users/${props.userId}`);
        console.log(json);
        setData(json.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className={style.containerPost}>
      <div className={style.containerUserContent}>
        <div>
          <img src={logo} alt="" className={style.imgUser} />
        </div>
        <div className={style.content}>
          <span className={style.nameUser}>
            {data.name} <span className={style.arroba}>@{data.username}</span>
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
