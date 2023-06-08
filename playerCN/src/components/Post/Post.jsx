import React, { useEffect, useState } from "react";
import style from "./Post.module.css";
import logo from "../../assets/imgs/logoEquipo2.png";
import { NavLink } from "react-router-dom";
import { getUserById } from "../../redux/actions/users/user";

const Post = (props) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserById(props.userId);
        setUserData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [props.userId]);

  const formatContent = (content) => {
    const lines = content?.split("\n");
    return lines?.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  const { username, admin, email, id, name } = userData;

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
            </div>
          </div>
          <div className={style.containerReactions}>
            <div>
              <p className={style.textReactions}>123</p>
              <box-icon name="heart" color="#818486"></box-icon>
              <p className={style.textReactions}>Me gusta</p>
            </div>
            <div>
              <p className={style.textReactions}>{props.kids}</p>
              <box-icon name="comment" color="#818486"></box-icon>
              <p className={style.textReactions}>Comentarios</p>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Post;
