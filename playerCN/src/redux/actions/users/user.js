import { GET_USER, UPDATE_USER, LOGIN, REFRESH, REGISTER } from "./types";
import axios from "axios";
import ToastError from "../../../components/Alerts/ToastError";
import ToastSuccess from "../../../components/Alerts/ToastSuccess";

export const registerUser = (data) => {
  return async function () {
    try {
      const json = await axios.post("/users", data);
      ToastSuccess.fire({
        title: json.data,
      });
      if (json.data === "Registrado con éxito.") {
        window.setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (error) {
      return ToastError.fire({
        icon: "error",
        title: error.message,
      });
    }
  };
};

export const getUser = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/users");
      return dispatch({
        type: GET_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
