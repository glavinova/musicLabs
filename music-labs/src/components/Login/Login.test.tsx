import {
  act,
  fireEvent,
  render,
} from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("<Login />", () => {
  let store: any;
  let wrapper: any;
  const initialState = {
    token: null,
    userData: null,
    error: null,
    loading: false,
  };
  beforeEach(() => {
    store = mockStore({
      auth: initialState,
    });
    const closeModalHandler = jest.fn();
    wrapper = render(
      <Provider store={store}>
        <Router>
          <Login showModal={true} onClose={closeModalHandler} />
        </Router>
      </Provider>
    );
  });
  it("should render the Login page", () => {
    const { getByTestId } = wrapper;
    const getLogin = getByTestId("loginHeader");
    expect(getLogin).toBeTruthy();
  });

  it("should contain email and passwoord fields", () => {
    const { getByPlaceholderText } = wrapper;
    const getEmailField = getByPlaceholderText("Email");
    const getPasswordField = getByPlaceholderText("Password");
    expect(getEmailField).toBeTruthy();
    expect(getPasswordField).toBeTruthy();
  });

  it("should contain a login button", () => {
    const { getByRole } = wrapper;
    const getLoginButton = getByRole("button", {
      name: /Login/i,
    });
    expect(getLoginButton).toBeTruthy();
  });

  it("should validate the user inputs, and provide error message", async () => {
    const { getByPlaceholderText, queryByText, getByLabelText } = wrapper;
    const getEmailField = getByPlaceholderText("Email");
    const getPasswordField = getByPlaceholderText("Password");

    await act(async () => {
      fireEvent.change(getEmailField, {
        target: { value: "" },
      });

      fireEvent.change(getPasswordField, {
        target: { value: "" },
      });
    });

    const getFrom = getByLabelText("form");
    await act(async () => {
      fireEvent.submit(getFrom);
    });

    const getError = queryByText("Invalid credentials");
    expect(getError).toBeTruthy();
  });
});
