import * as actionTypes from "./actionTypes";
import fetchClient from "../../interceptors/axios-interceptor";
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

export const fetchUser = (userData: any) => {
  return {
    type: actionTypes.FETCH_USER,
    userData: userData,
  };
};

export const logout = () => {
  fetchClient()
    .post("https://reqres.in/api/logout")
    .then(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      localStorage.clear();
    });
  return {
    type: actionTypes.LOGOUT,
  };
};

export const auth = (email: string, password: string, isSignUp: boolean) => {
  return (dispatch: any) => {
    dispatch(login());
    const loginData = {
      email: email,
      password: password,
    };
    let url = "https://reqres.in/api/register";
    if (!isSignUp) {
      url = "https://reqres.in/api/login";
    }
    axios.all([fetchClient().post(url, loginData),
              fetchClient().get("https://reqres.in/api/users/4")])
     .then(axios.spread((firstResponse: any, secondResponse: any) => {  
      localStorage.setItem("token", firstResponse.data.token);
      localStorage.setItem("userData", JSON.stringify(secondResponse.data.data));
        dispatch(loginSuccess(firstResponse.data.token));
        dispatch(fetchUser(JSON.stringify(secondResponse.data.data)));
     }))
     .catch((err: any) => {
      dispatch(loginFailed(err.response.data.error));
    });
  };
};

export const authCheckState = () => {
  return (dispatch: any) => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loginSuccess(token));
    }
  };
};
