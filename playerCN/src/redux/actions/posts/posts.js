import { GET_POSTS, ERROR } from "./types";
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
      console.log(error);
    }
  };
};
