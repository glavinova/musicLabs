import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import Register from "./Register";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("Register component", () => {
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
    wrapper = render(
      <Provider store={store}>
        <Router>
          <Register />
        </Router>
      </Provider>
    );
  });
  it("renders required on empty form", () => {
    const { getByText, queryAllByText } = wrapper;
    const buttonElement = getByText("Create Account", { exact: false });
    userEvent.click(buttonElement);

    const outputElement = queryAllByText("is required", { exact: false });
    expect(outputElement).toHaveLength(2);
  });

  it("valid inputs do NOT render invalid validation", () => {
    const { getByLabelText, getByText, queryAllByText } = wrapper;
    const emailInput = getByLabelText("Email *");
    const passwordInput = getByLabelText("Password *");
    const confirmPasswordInput = getByLabelText("Confirm Password *");

    userEvent.type(emailInput, "eve.holt@reqres.in");
    userEvent.type(passwordInput, "pistol");
    userEvent.type(confirmPasswordInput, "pistol");

    const buttonElement = getByText("Create Account");
    userEvent.click(buttonElement);

    const outputElement = queryAllByText("invalid", { exact: false });
    expect(outputElement).toHaveLength(0);
  });

  it("Invalid inputs render invalid validation", () => {
    const { getByText, queryAllByText, getByLabelText } = wrapper;

    const emailInput = getByLabelText("Email *");
    const passwordInput = getByLabelText("Password *");
    const confirmPasswordInput = getByLabelText("Confirm Password *");

    userEvent.type(emailInput, "aaa");
    userEvent.type(passwordInput, "bbb");
    userEvent.type(confirmPasswordInput, "bbb");

    const buttonElement = getByText("Create Account");
    userEvent.click(buttonElement);

    const outputElement = queryAllByText("invalid", { exact: false });
    expect(outputElement).toHaveLength(3);
  });
});
