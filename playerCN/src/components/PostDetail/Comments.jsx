import React from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../../redux/actions/posts/posts";
import useSWR from "swr";
import Posts from "../Posts/Posts";

const Comments = () => {
  const { idPost } = useParams();
  const { data, isLoading } = useSWR(`posts/comments/${idPost}`, () =>
    getComments(idPost)
  );
  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <div>
      <Posts posts={data.data} />
    </div>
  );
};

export default Comments;
