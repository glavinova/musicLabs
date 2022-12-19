import React from "react";
import { configure, shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router";
import Adapter from "enzyme-adapter-react-16";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import App from "./App";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Register from "./components/Register/Register";

configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("routes using memory router", () => {
  let store: any;
  let wrapper: any;
  beforeEach(() => {
    store = mockStore({
      auth: {
        token: null,
        userData: null,
        error: null,
        loading: false,
      },
    });
    wrapper = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  });
  it("should render the App component", () => {
    const { getByText } = wrapper;
    const addText = getByText(/OVER 100 000 SHEET MUSIC ARRANGEMENTS/i, {
      exact: false,
    });
    expect(addText).toBeTruthy();
  });

  it("should be rendered Home Page when the route is '/' ", () => {
    wrapper = shallow(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      );
    window.history.pushState({}, "", "/");
    expect(wrapper.find(HomePage)).toBeTruthy();
  });

  it("should be rendered Register Page when the route is '/' ", () => {
    wrapper = shallow(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      );
    window.history.pushState({}, "", "/register");
    expect(wrapper.find(Register)).toBeTruthy();
  });

  it("should NOT be rendered Register Page when the route is '/' and user is already signed in ", () => {
    wrapper = shallow(
        <Provider store={store}>
          <Router>
            <App isAuthenticated />
          </Router>
        </Provider>
      );
    window.history.pushState({}, "", "/register");
    expect(wrapper.find(Register)).toHaveLength(0);
  });
});
