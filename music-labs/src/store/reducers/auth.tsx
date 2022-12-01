import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  error: null,
  loading: false,
};

const updateObject = (oldObject: any, updatedProperties: any) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

const login = (state: any, action: any) => {
  return updateObject(state, { error: null, loading: true });
};

const loginSuccess = (state: any, action: any) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false,
  });
};

const loginFailed = (state: any, action: any) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const fetchUser = (state: any, action: any) => {
  return updateObject(state, {
    userData: action.userData,
    loading: false,
  });
};

const authLogout = (state: any, action: any) => {
  return updateObject(state, { token: null, loading: false });
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return login(state, action);
    case actionTypes.LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case actionTypes.LOGIN_FAILED:
      return loginFailed(state, action);
    case actionTypes.FETCH_USER:
      return fetchUser(state, action);
    case actionTypes.LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
