import axios from "axios";
import { signInSuccess, signInfailure } from "./AuthAction";

export const signIn = async (user, dispatch) => {
  try {
    const res = await axios.post("/api/v1/create/", user);

    dispatch(signInSuccess(res.data));
  } catch (error) {
    dispatch(signInfailure(error.response));
  }
};
