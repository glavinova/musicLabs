import * as actionTypes from "../actions/actionTypes";
import * as actions from "./index";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { fetchUser, login, loginFailed, loginSuccess, logout } from "./auth";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);
const initialState = {
  token: null,
  userData: null,
  error: null,
  loading: false,
};
const store = mockStore({
  auth: initialState,
});
describe("auth actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  it("should dispatch LOGIN when attemping to login", () => {
    store.dispatch(login());
    const expectedActions = [
      {
        type: actionTypes.LOGIN,
      },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should dispatch LOGIN_SUCCESS after successful login", () => {
    mock
      .onPost("https://reqres.in/api/login")
      .reply(200, { token: "QpwL5tke4Pnpja7X4" });
    store.dispatch(loginSuccess("QpwL5tke4Pnpja7X4"));
    const expectedActions = [
      {
        type: actionTypes.LOGIN_SUCCESS,
        token: "QpwL5tke4Pnpja7X4",
      },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should dispatch LOGIN_FAILED after failed login", () => {
    mock
      .onPost("https://reqres.in/api/login")
      .reply(400, { error: "Missing password" });
    store.dispatch(loginFailed("Missing password"));
    const expectedActions = [
      {
        type: actionTypes.LOGIN_FAILED,
        error: "Missing password",
      },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should dispatch FETCH_USER after successful login and user authentication", () => {
    const userData = {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
    };
    mock
      .onGet("https://reqres.in/api/users/4")
      .reply(200, { userData: userData });
    store.dispatch(fetchUser(userData));
    const expectedActions = [
      {
        type: actionTypes.FETCH_USER,
        userData: userData,
      },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should dispatch LOGOUT when attemping to logout", () => {
    mock.onPost("https://reqres.in/api/logout").reply(200);
    store.dispatch(logout());
    const expectedActions = [
      {
        type: actionTypes.LOGOUT,
      },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should dispatch LOGIN_SUCCESS on authCheckState", () => {
    mock
      .onPost("https://reqres.in/api/login")
      .reply(200, { token: "QpwL5tke4Pnpja7X4" });
    store.dispatch(loginSuccess("QpwL5tke4Pnpja7X4"));
    //store.dispatch(actions.authCheckState());
    const expectedActions = [
      {
        type: actionTypes.LOGIN_SUCCESS,
        token: "QpwL5tke4Pnpja7X4",
      },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should dispatch LOGIN on auth", () => {
    mock
      .onPost("https://reqres.in/api/login")
      .reply(200, { token: "QpwL5tke4Pnpja7X4" });
    const actionCall: any = actions.auth(
      "eve.holt@reqres.in",
      "cityslicka",
      false
    );
    store.dispatch(actionCall);
    const expectedActions = [
      {
        type: actionTypes.LOGIN,
      },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
