import axios from "axios";
import { loginFailure, loginSuccess, loginStart } from "./AuthAction";
export const login = (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = axios.post("http://localhost:8080/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
