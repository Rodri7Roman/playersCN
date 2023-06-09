import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../../redux/actions/posts/posts";
import Posts from "../Posts/Posts";

const Comments = () => {
  const { idPost } = useParams();

  return (
    <div>
      <Posts idPost={idPost} />
    </div>
  );
};

export default Comments;
