import index from "./index";

describe("index.tsx unit test", () => {
  it("Should render app without crashing", () => {
    expect(
      JSON.stringify(
        Object.assign({}, index, { _reactInternalInstance: "censored" })
      )
    ).toMatchSnapshot();
  });
});
