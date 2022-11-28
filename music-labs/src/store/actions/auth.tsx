import * as actionTypes from "./actionTypes";
import axios from "axios";

export const login = () => {
  return {
    type: actionTypes.LOGIN,
  };
};

export const loginSuccess = (token: string) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token: token,
  };
};

export const loginFailed = (error: any) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: actionTypes.LOGOUT,
  };
};

export const auth = (email: any, password: any) => {
  return (dispatch: any) => {
    dispatch(login());
    const loginData = {
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/login", loginData)
      .then((response: any) => {
        localStorage.setItem("token", response.data.token);
        dispatch(loginSuccess(response.data.token));
      })
      .catch((err) => {
        dispatch(loginFailed(err.response.data.error));
      });
  };
};

export const authLogout = () => {
  return (dispatch: any) => {
    const token = localStorage.getItem("token");
    if(token){
      dispatch(logout());
    }
  };
};

export const authCheckState = () => {
  return (dispatch: any) => {
    const token = localStorage.getItem("token");
    if (!token) {
      //dispatch(logout());
    } else {
      dispatch(loginSuccess(token));
    }
  };
};
