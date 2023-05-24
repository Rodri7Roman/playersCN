import { GET_USER, UPDATE_USER, LOGIN, REFRESH, REGISTER } from "./types";
import axios from "axios";
import ToastError from "../../../components/Alerts/ToastError";
import ToastSuccess from "../../../components/Alerts/ToastSuccess";

export const registerUser = (data) => {
  return async function () {
    try {
      const json = await axios.post("/users/registrarse", data);
      ToastSuccess.fire({
        title: json.data,
      });
      if (json.data === "Registrado con éxito.") {
        window.setTimeout(() => {
          window.location.href = "/ingresar";
        }, 800);
      }
    } catch (error) {
      return ToastError.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  };
};

export const ingresar = (data) => {
  return async function (dispatch) {
    try {
      const json = await axios.post("/users/ingresar", data);
      console.log(json);
      ToastSuccess.fire({
        title: "Iniciando sesión...",
      });
      window.localStorage.setItem("token", json.data.token);
    } catch (error) {
      return ToastError.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  };
};

export const getUser = (token) => {
  return async function (dispatch) {
    try {
      const json = await axios.get("/users/perfil", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return dispatch({
        type: GET_USER,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
