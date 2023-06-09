import React, { useEffect, useRef } from "react";
import Post from "../Post/Post";
import { getPosts } from "../../redux/actions/posts/posts";
import useSWRInfinite from "swr/infinite";
import { useLocation } from "react-router-dom";

const PAGE_SIZE = 5;

const Posts = (props) => {
  const location = useLocation();
  const { data, isLoading, error, size, setSize } = useSWRInfinite(
    (index) => `posts/${index}`,
    (key) => {
      const [, page] = key.split("/");
      return getPosts(PAGE_SIZE, Number(page) * 5);
    }
  );

  const spanElement = useRef(null);

  const posts = data?.flatMap((page) => page.data) || [];

  useEffect(() => {
    if (posts && posts.length === PAGE_SIZE && !error && !isLoading) {
      setSize(null); // Detener las siguientes solicitudes
    }
  }, [posts, error, isLoading, size, setSize]);

  useEffect(() => {
    if (!data) {
      // Si no hay datos, puedes mostrar un indicador de carga aquí
    } else if (data[size - 1]?.data.length < PAGE_SIZE) {
      // Si la última página tiene menos elementos que el tamaño de página, ya se cargaron todos los posts
      setSize(null); // Detener las siguientes solicitudes
    }
  }, [data, size, setSize]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading && !error) {
        setSize((prevSize) => {
          return prevSize + 1;
        });
      }
    });

    if (spanElement.current == null) {
      return;
    }

    if (spanElement.current) {
      observer.observe(spanElement.current);
    }

    return () => {
      if (spanElement.current) {
        observer.unobserve(spanElement.current);
      }
    };
  }, [isLoading, setSize, error]);

  return (
    <div>
      {location.pathname === "/"
        ? posts?.map((post) => {
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
          })
        : props.posts?.map((post) => {
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
      {!error && !isLoading && (
        <span style={{ color: "white" }} ref={spanElement}>
          
        </span>
      )}
    </div>
  );
};

export default Posts;
