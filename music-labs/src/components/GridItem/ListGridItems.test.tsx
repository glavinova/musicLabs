import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GridItem from "./GridItem";
import ListGridItems from "./ListGridItems";
import { MenuItem } from "@mui/material";

configure({ adapter: new Adapter() });

describe("<ListGridItems />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<ListGridItems />);
  });

  it("should list grid item for every song record", () => {
    expect(wrapper.find(GridItem)).toHaveLength(16);
  });

  it("should render option inside the sort dropdown", () => {
    const menuItem = wrapper.findWhere(
      (node: any) => node.is(MenuItem) && node.prop("value") === "a-z"
    );
    expect(menuItem.exists()).toBe(true);
  });
});
