import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from "@testing-library/react";
import AppContext from "../../context/app-context";
import HomePage from "./HomePage";
import ListGridItems from "../GridItem/ListGridItems";
import { BrowserRouter as Router } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("<HomePage />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it("should exist the ListGridItems component on the HomePage", () => {
    const input = wrapper.find(ListGridItems);
    expect(input).toHaveLength(1);
  });

  it("should set the app context url", () => {
    const url = "/";
    const mockContextValue = {
      filterTerm: "",
      setSearchInput: (term: string) => {},
      currentUrl: url,
      setCurrentUrl: (url: string) => {},
    };
    render(
      <Router>
        <AppContext.Provider value={mockContextValue}>
          <HomePage />
        </AppContext.Provider>
      </Router>
    );
    expect(mockContextValue.currentUrl).toEqual(url);
  });
});
