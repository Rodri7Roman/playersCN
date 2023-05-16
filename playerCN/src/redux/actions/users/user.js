import { GET_USER, UPDATE_USER, LOGIN, REFRESH, REGISTER } from "./types";
import axios from "axios";

export const registerUser = (data) => {
  return async function () {
    try {
      const json = await axios.post(
        "/api/auth/register",
        JSON.stringify(data),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      return json;
    } catch (error) {
      console.log(error);
    }
  };
};
