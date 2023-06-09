import { GET_POSTS, ERROR, GET_POSTS_USER, GET_COMMENTS } from "./types";
import axios from "axios";
import ToastError from "../../../components/Alerts/ToastError";
import ToastSuccess from "../../../components/Alerts/ToastSuccess";

export const getPosts = async (limit, offset) => {
  try {
    const json = await axios.get(`/posts?limit=${limit}&offset=${offset}`);
    return json;
  } catch (error) {
    return ToastError.fire({
      icon: "error",
      title: error.response.data,
    });
  }
};

export const getComments = async (parentId, limit, offset) => {
  try {
    const json = await axios.get(
      `/posts/comments/${parentId}?limit=${limit}&offset=${offset}`
    );
    return json;
  } catch (error) {
    return error;
  }
};

export const getPostsByUser = (token) => {
  return async (dispatch) => {
    try {
      const json = await axios.get("/posts/myPosts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return dispatch({
        type: GET_POSTS_USER,
        payload: json.data,
      });
    } catch (error) {
      return ToastError.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  };
};

export const getPostsByUsername = (username) => {
  return async (dispatch) => {
    try {
      const json = await axios.get(`/posts/${username}?queryType=username`);
      return dispatch({
        type: GET_POSTS_USER,
        payload: json.data,
      });
    } catch (error) {
      return ToastError.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  };
};

export const getPostById = async (id) => {
  try {
    const json = await axios.get(`posts/${id}?queryType=id`);
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const postPost = (content, token) => {
  return async (dispatch) => {
    try {
      const json = await axios.post(
        "/posts",
        { content: content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // ToastSuccess.fire({
      //   title: json.data,
      // });
      window.location.reload();
    } catch (error) {
      console.log(error);
      return ToastError.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  };
};

export const postComment = (content, token, idPost) => {
  return async (dispatch) => {
    try {
      const json = await axios.post(
        `/posts/?parentPostId=${idPost}`,
        { content: content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(json);
      window.location.reload();
    } catch (error) {
      return ToastError.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  };
};
