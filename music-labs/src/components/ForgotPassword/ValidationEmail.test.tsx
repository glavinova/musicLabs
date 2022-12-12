import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ValidationEmail from "./ValidationEmail";
import { render } from "@testing-library/react";
import AppContext from "../../context/app-context";

configure({ adapter: new Adapter() });

describe("<ValidationEmail />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<ValidationEmail />);
  });

  it("should exist the title", () => {
    const title = wrapper.find("#title");
    expect(title).toHaveLength(1);
  });

  it("should exist the text content", () => {
    const title = wrapper.find("#textContent");
    expect(title).toHaveLength(1);
  });

  it("should set the app context route", () => {
    const resetPasswordUrl = "/reset-password-email-sent";
    const mockContextValue = {
      filterTerm: "",
      setSearchInput: (term: string) => {},
      currentUrl: resetPasswordUrl,
      setCurrentUrl: (url: string) => {},
    };
    render(
      <AppContext.Provider value={mockContextValue}>
        <ValidationEmail />
      </AppContext.Provider>
    );
    expect(mockContextValue.currentUrl).toEqual(resetPasswordUrl);
  });
});
