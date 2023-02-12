import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "@mui/material/Card";
import TeamCard from "./TeamCard";

configure({ adapter: new Adapter() });

describe("<TeamCard />", () => {
  const props = {
    image: "./images/man-profile.jpg",
    name: "Dylan Hudson",
    color: "primary",
    label: "Technical Lead",
    description:
      "Learning to code is useful no matter what your career ambitions are.",
  };
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<TeamCard />);
  });

  it("should exist the TeamCard component on the AboutUs page", () => {
    wrapper.setProps(props);
    const card = wrapper.find(Card);
    expect(card).toHaveLength(1);
  });
});
