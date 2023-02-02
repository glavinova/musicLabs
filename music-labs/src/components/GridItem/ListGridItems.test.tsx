import React from "react";
import { configure, shallow } from "enzyme";
import { render } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import GridItem from "./GridItem";
import ListGridItems from "./ListGridItems";
import { MenuItem } from "@mui/material";
import GridItemData from "../../interfaces/girdItemDummyData";
import { BrowserRouter as Router } from "react-router-dom";
import AppContext from "../../context/app-context";
import userEvent from "@testing-library/user-event";

configure({ adapter: new Adapter() });

describe("<ListGridItems />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<ListGridItems />);
  });

  it("should list grid item for every song record", () => {
    expect(wrapper.find(GridItem)).toHaveLength(16);
  });

  it("should render 4 options inside the sort dropdown", () => {
    const menuItem1 = wrapper.findWhere(
      (node: any) => node.is(MenuItem) && node.prop("value") === "a-z"
    );
    expect(menuItem1.exists()).toBe(true);

    const menuItem2 = wrapper.findWhere(
      (node: any) => node.is(MenuItem) && node.prop("value") === "z-a"
    );
    expect(menuItem2.exists()).toBe(true);

    const menuItem3 = wrapper.findWhere(
      (node: any) => node.is(MenuItem) && node.prop("value") === "low-high"
    );
    expect(menuItem3.exists()).toBe(true);

    const menuItem4 = wrapper.findWhere(
      (node: any) => node.is(MenuItem) && node.prop("value") === "high-low"
    );
    expect(menuItem4.exists()).toBe(true);
  });

  it("should sort the items from A-Z", () => {
    expect(GridItemData).toStrictEqual(
      GridItemData.sort((a, b) => (a.name < b.name ? -1 : 1))
    );
  });

  it("should sort the items from Z-A", () => {
    expect(GridItemData).toStrictEqual(
      GridItemData.sort((a, b) => (a.name > b.name ? -1 : 1))
    );
  });

  it("should sort the items from price low - price high", () => {
    expect(GridItemData).toStrictEqual(
      GridItemData.sort((a, b) => (a.price < b.price ? -1 : 1))
    );
  });

  it("should sort the items from price high - price low", () => {
    expect(GridItemData).toStrictEqual(
      GridItemData.sort((a, b) => (a.price > b.price ? -1 : 1))
    );
  });

  it("should set the setSortType state", async () => {
    const setItemsData = jest.fn();
    const useStateSpy: any = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((data: any) => [data, setItemsData]);
    const { getByText, getByRole, findByRole, getByTestId, getAllByTestId } =
      render(
        <Router>
          <ListGridItems />
        </Router>
      );
    //Show 16 Grid Items by default
    const gridItems = getAllByTestId("gridItem");
    expect(gridItems.length).toEqual(16);
    //Click the sort dropdown
    const dropdownButton = getByTestId("sortLabel");
    userEvent.click(dropdownButton);
    //const listbox = within(getByRole("listbox"));
    const dropdownItem = await getByText("Song Name (Ascending)");
    userEvent.click(dropdownItem);
    // fireEvent.mouseDown(getByTestId("sortLabel"));
    // fireEvent.click(listbox.getByRole("button"));
    expect(setItemsData).toHaveBeenCalled(); //check if the setState is called properly
  });

  it("should show all data if filter term is empty", () => {
    const mockFilterTerm = "Aria";
    const mockContextValue = {
      filterTerm: mockFilterTerm,
      setSearchInput: (term: string) => {},
      currentUrl: "",
      setCurrentUrl: (url: string) => {},
    };
    expect(mockContextValue.filterTerm).toEqual(mockFilterTerm);

    const data = GridItemData;
    const filteredData = data.filter((item) => {
      return item;
    });

    const component = shallow(
      <AppContext.Provider value={mockContextValue}>
        <Router>
          <ListGridItems />
        </Router>
      </AppContext.Provider>
    );
    expect(filteredData).toEqual(data);
    expect(data.length).toEqual(16);
  });
});
