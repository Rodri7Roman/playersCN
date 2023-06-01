import React, { useEffect, useState } from "react";
import style from "./Post.module.css";
import logo from "../../assets/imgs/logoEquipo2.png";
import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";

const Post = (props) => {
  const [data, setData] = useState({});
  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname !== "/perfil" &&
      !location.pathname.includes("jugadores")
    ) {
      (async () => {
        try {
          const json = await axios.get(`/users/${props.userId}?queryType=id`);
          setData(json.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  const formatContent = (content) => {
    const lines = content.split("\n");
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <>
      {location.pathname !== "/perfil" &&
      !location.pathname.includes("jugadores") ? (
        <div className={style.containerPost}>
          <div className={style.containerUserContent}>
            <div>
              <img src={logo} alt="" className={style.imgUser} />
            </div>
            <div className={style.content}>
              <NavLink
                to={`/jugadores/${data.username}`}
                className={style.linkNameUser}
              >
                {data.name}{" "}
                <span className={style.arroba}>@{data.username}</span>
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
      ) : (
        <div className={style.containerPost}>
          <div className={style.containerUserContent}>
            <div>
              <img src={logo} alt="" className={style.imgUser} />
            </div>
            <div className={style.content}>
              <NavLink
                to={`/jugadores/${props.user.username}`}
                className={style.linkNameUser}
              >
                {props.user.name}{" "}
                <span className={style.arroba}>@{props.user.username}</span>
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
      )}
    </>
  );
};

export default Post;
