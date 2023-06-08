import React, { useEffect } from "react";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/posts/posts";

const Posts = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts(7, 0));
  }, [dispatch]);

  return (
    <div>
      {posts?.map((post) => {
        console.log(post);
        return (
          <div key={post.id}>
            <Post
              postId={post.id}
              content={post.content}
              userId={post.UserId}
              kids={post.kids.length}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
