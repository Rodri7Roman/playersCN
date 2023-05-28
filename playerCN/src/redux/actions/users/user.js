import {
  GET_USER,
  UPDATE_NAME,
  UPDATE_USERNAME,
  LOGIN,
  REFRESH,
  REGISTER,
  LOGOUT,
  ERROR,
} from "./types";
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
      ToastSuccess.fire({
        title: "Iniciando sesión...",
      });
      window.localStorage.setItem("token", json.data.token);
      if (json.data.token) {
        window.setTimeout(() => {
          window.location.href = "/";
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
      return dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const updateUsername = (token, username) => {
  return async function (dispatch) {
    try {
      const json = await axios.patch(
        "/users/updateUsername",
        {
          username: username,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return dispatch({
        type: UPDATE_USERNAME,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const updateName = (token, name) => {
  return async function (dispatch) {
    try {
      const json = await axios.patch(
        "/users/updateName",
        {
          name: name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return dispatch({
        type: UPDATE_NAME,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const logout = () => {
  return async function (dispatch) {
    localStorage.removeItem("token");
    return dispatch({
      type: LOGOUT,
      payload: {},
    });
  };
};
