import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainFeaturedPost from "./MainFeaturedPost";
import { Paper } from "@mui/material";

configure({ adapter: new Adapter() });

describe("<MainFeaturedPost />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(
      <MainFeaturedPost
        post={{
          description: "",
          image: "",
          imageText: "",
          title: "",
        }}
      />
    );
  });

  it("should exist the MainFeaturedPost component", () => {
    const paper = wrapper.find(Paper);
    expect(paper).toHaveLength(1);
  });
});
