import React from "react";
import Post from "../Post/Post";

const Posts = (props) => {
  return (
    <div>
      {props.posts?.map((post) => {
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
