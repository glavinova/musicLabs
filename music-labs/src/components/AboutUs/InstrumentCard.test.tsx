import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import InstrumentCard from "./InstrumentCard";
import { CardActionArea } from "@mui/material";

configure({ adapter: new Adapter() });

describe("<InstrumentCard />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<InstrumentCard />);
  });

  it("should exist the InstrumentCard component on the AboutUs page", () => {
    const card = wrapper.find(CardActionArea);
    expect(card).toHaveLength(1);
  });
});
