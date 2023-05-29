import React from "react";
import Post from "../Post/Post";

const Posts = (props) => {
  return (
    <div>
      {props.posts?.map((post) => {
        return (
          <div key={post.id}>
            <Post
              content={post.content}
              title={post.title}
              userId={post.UserId}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
