import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../../redux/actions/posts/posts";
import Posts from "../Posts/Posts";

const Comments = () => {
  const { idPost } = useParams();
  const [commentsData, setCommentsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getComments(idPost);
        setCommentsData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchComments();
  }, [idPost]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <Posts posts={commentsData} />
    </div>
  );
};

export default Comments;
