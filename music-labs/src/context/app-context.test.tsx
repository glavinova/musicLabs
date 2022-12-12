import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from "@testing-library/react";
import AppContext, { AppContextProvider } from "./app-context";
import SearchBar from "../components/SearchBar/SearchBar";
import ValidationEmail from "../components/ForgotPassword/ValidationEmail";

configure({ adapter: new Adapter() });

describe("<AppContextProvider />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<AppContextProvider />);
  });

  it("should set the app context filter term and test it in the Search component", () => {
    const filterTerm = "Aria";
    const mockContextValue = {
      filterTerm: filterTerm,
      setSearchInput: (term: string) => {},
      currentUrl: "",
      setCurrentUrl: (url: string) => {},
    };
    const searchBarComponent = render(
      <AppContext.Provider value={mockContextValue}>
        <SearchBar />
      </AppContext.Provider>
    );
    expect(mockContextValue.filterTerm).toEqual(filterTerm);
  });

  it("should set the app context url and test it in the Validate email component", () => {
    const url = "/reset-password-email-sent";
    const mockContextValue = {
      filterTerm: "",
      setSearchInput: (term: string) => {},
      currentUrl: url,
      setCurrentUrl: (url: string) => {},
    };
    render(
      <AppContext.Provider value={mockContextValue}>
        <ValidationEmail />
      </AppContext.Provider>
    );

    expect(mockContextValue.currentUrl).toEqual(url);
  });
});
