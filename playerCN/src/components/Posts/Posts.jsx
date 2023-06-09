import React, { useEffect, useRef, useState } from "react";
import Post from "../Post/Post";
import { getComments, getPosts } from "../../redux/actions/posts/posts";
import { useLocation } from "react-router-dom";

const PAGE_SIZE = 5;

const Posts = (props) => {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const spanElement = useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (location.pathname === "/") {
          const response = await getPosts(PAGE_SIZE, (page - 1) * PAGE_SIZE);
          setPosts((prevPosts) => [...prevPosts, ...response.data]);
        } else if (location.pathname.includes("post")){
          const response = await getComments(
            props.idPost,
            PAGE_SIZE,
            (page - 1) * PAGE_SIZE
          );
          setPosts((prevPosts) => [...prevPosts, ...response.data]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page, props.idPost]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading && !error) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (spanElement.current) {
      observer.observe(spanElement.current);
    }

    return () => {
      if (spanElement.current) {
        observer.unobserve(spanElement.current);
      }
    };
  }, [isLoading, error]);

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>
          <Post
            postId={post.id}
            content={post.content}
            userId={post.UserId}
            kids={post.kids.length}
          />
        </div>
      ))}
      {!error && !isLoading && (
        <span style={{ color: "white" }} ref={spanElement}></span>
      )}
    </div>
  );
};

export default Posts;
