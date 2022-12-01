import * as actionTypes from "./actionTypes";
import fetchClient from "../../interceptors/axios-interceptor";

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

export const fetchUser = () => {
  fetchClient()
    .get("https://reqres.in/api/users/4")
    .then((res) => {
      console.log(res.data.data);
      localStorage.setItem("userData", JSON.stringify(res.data.data));
    });
  return {
    type: actionTypes.FETCH_USER,
  };
};

export const logout = () => {
  fetchClient()
    .post("https://reqres.in/api/logout")
    .then(() => {
      localStorage.removeItem("token");
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
    fetchClient()
      .post(url, loginData)
      .then((response: any) => {
        localStorage.setItem("token", response.data.token);
        dispatch(loginSuccess(response.data.token));
        dispatch(fetchUser());
      })
      .catch((err) => {
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
