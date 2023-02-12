import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "@mui/material/Card";
import AboutUs from "./AboutUs";
import { Box } from "@mui/material";

configure({ adapter: new Adapter() });

describe("<AboutUs />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<AboutUs />);
  });

  it("should render the AboutUs page", () => {
    const box = wrapper.find(Box);
    const card = wrapper.find(Card);
    expect(box).toHaveLength(10);
    expect(card).toHaveLength(1);
  });
});
