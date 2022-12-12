import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userData: null,
      error: null,
      loading: false,
    });
  });

  it("should start the loading process", () => {
    expect(
      reducer(
        { token: null, userData: null, error: null, loading: false },
        { type: actionTypes.LOGIN }
      )
    ).toEqual({ token: null, userData: null, error: null, loading: true });
  });

  it("should store the token upon successful login", () => {
    expect(
      reducer(
        { token: null, userData: null, error: null, loading: true },
        { type: actionTypes.LOGIN_SUCCESS, token: "QpwL5tke4Pnpja7X4" }
      )
    ).toEqual({
      token: "QpwL5tke4Pnpja7X4",
      userData: null,
      error: null,
      loading: false,
    });
  });

  it("should throw error upon unsuccessful login", () => {
    expect(
      reducer(
        { token: null, userData: null, error: null, loading: true },
        { type: actionTypes.LOGIN_FAILED, error: "Missing password" }
      )
    ).toEqual({
      token: null,
      userData: null,
      error: "Missing password",
      loading: false,
    });
  });
});
