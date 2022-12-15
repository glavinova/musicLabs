import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavMenu from "./NavMenu";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { cleanup } from "@testing-library/react";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

configure({ adapter: new Adapter() });

describe("<NavMenu />", () => {
  afterEach(cleanup);
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
          <NavMenu />
        </Router>
      </Provider>
    );
  });

  it("should have Login and SignUp buttons if user is not logged in", () => {
    const { getByTestId } = wrapper;
    const loginBtn = getByTestId("loginBtn");
    const signUpBtn = getByTestId("signUpBtn");
    expect(loginBtn).toBeTruthy();
    expect(signUpBtn).toBeTruthy();
  });

  // it("should have Logout button if user is logged in", () => {
  //   wrapper.setProps({isAuthenticated: true});
  //   const { getByTestId } = wrapper;
  //   const loginBtn = getByTestId("loginBtn");
  //   const signUpBtn = getByTestId("signUpBtn");
  //   const logoutBtn = getByTestId("logoutBtn");
  //   expect(loginBtn).toBeFalsy();
  //   expect(signUpBtn).toBeFalsy();
  //   expect(logoutBtn).toBeTruthy();
  // });
});
