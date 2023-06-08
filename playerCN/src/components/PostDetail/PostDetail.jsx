import React, { useEffect, useState } from "react";
import style from "./PostDetail.module.css";
import NavBar from "../Navbar/NavBar";
import { NavLink, useParams } from "react-router-dom";
import Post from "../Post/Post";
import { getPostById } from "../../redux/actions/posts/posts";
import Comments from "./Comments";
import Prompt from "./Prompt/Prompt";

const PostDetail = (props) => {
  const { idPost } = useParams();
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPostById(idPost);
        setPostData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [idPost]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  const { UserId, content, createdAt, id, kids } = postData;

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
          <Post
            postId={id}
            content={content}
            userId={UserId}
            kids={kids.length}
          />
          <Prompt />
          <Comments />
        </div>
      </div>
      <div>
        <h1 className={style.s}>KJASD</h1>
      </div>
    </div>
  );
};

export default PostDetail;
