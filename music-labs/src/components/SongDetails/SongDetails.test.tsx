import React from "react";
import SongDetails from "./SongDetails";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import appConstants from "../../constants/app-constants";
import {
  GenreEnum,
  DificulltyLevelEnum,
} from "../../interfaces/app-interfaces";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const props = {
  id: 1,
  name: "Allegro in A Major",
  artist: "W.F.Bach",
  parts: 1,
  pages: 4,
  duration: "02:36",
  genre: GenreEnum.Classical,
  instrument: "piano",
  price: 17.99,
  songKey: "D Major",
  difficulty: DificulltyLevelEnum.Intermediate,
  description: appConstants.loremIpsumDescription,
};
jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: "/details",
    search: "",
    hash: "",
    state: "",
  }),
}));

describe("<SongDetails />", () => {
  it("should render correctly", () => {
    const store = mockStore({
      auth: {
        token: null,
        userData: null,
        error: null,
        loading: false,
      },
    });
    const wrapper = shallow(
      <Provider store={store}>
        <Router>
          <SongDetails />
        </Router>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});