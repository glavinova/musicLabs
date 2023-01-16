import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "./Header";
import NavMenu from "./NavMenu";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should exist the SearchBar", () => {
    const searchBar = wrapper.find(SearchBar);
    expect(searchBar).toHaveLength(1);
  });

  it("should exist the NavMenu", () => {
    const navMenu = wrapper.find(NavMenu);
    expect(navMenu).toHaveLength(1);
  });
});