import React from "react";
import style from "./PostDetail.module.css";
import NavBar from "../Navbar/NavBar";
import { NavLink, useParams } from "react-router-dom";
import Post from "../Post/Post";
import useSWR from "swr";
import { getPostById } from "../../redux/actions/posts/posts";

const PostDetail = (props) => {
  const { idPost } = useParams();
  const { data, isLoading } = useSWR(`post/${idPost}`, () =>
    getPostById(idPost)
  );
  if (isLoading) {
    return <span>Loading...</span>;
  }

  const { UserId, content, createdAt, id } = data.data;
  return (
    <div className={style.containerPpal}>
      <NavBar />
      <div className={style.containerJugadores}>
        <div className={style.containerHeader}>
          <NavLink to={"/"} className={style.search}>
            <box-icon color="#fff" type="solid" name="chevrons-left"></box-icon>
          </NavLink>
          <a href="#inicio">Post</a>
        </div>
        <div className={style.containerPost}>
          <Post postId={id} content={content} userId={UserId} />
        </div>
      </div>
      <div>
        <h1 className={style.s}>KJASD</h1>
      </div>
    </div>
  );
};

export default PostDetail;
