import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchBar from "./SearchBar";
import { render } from "@testing-library/react";
import AppContext from "../../context/app-context";

configure({ adapter: new Adapter() });

describe("<SearchBar />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it("should exist the search input bar", () => {
    const input = wrapper.find("#searchBar");
    expect(input).toHaveLength(1);
  });

  it("should set the app context filter term", () => {
    const filterTerm = "Aria";
    const mockContextValue = {
      filterTerm: filterTerm,
      setSearchInput: (term: string) => {},
      currentUrl: "",
      setCurrentUrl: (url: string) => {},
    };
    render(
      <AppContext.Provider value={mockContextValue}>
        <SearchBar />
      </AppContext.Provider>
    );
    expect(mockContextValue.filterTerm).toEqual(filterTerm);
  });
});
