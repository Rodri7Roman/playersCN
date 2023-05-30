import { GET_POSTS, ERROR, GET_POSTS_USER } from "./types";
import axios from "axios";
import ToastError from "../../../components/Alerts/ToastError";
import ToastSuccess from "../../../components/Alerts/ToastSuccess";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get("/posts");
      return dispatch({
        type: GET_POSTS,
        payload: json.data,
      });
    } catch (error) {
      return ToastError.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  };
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
      return ToastError.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  };
};
