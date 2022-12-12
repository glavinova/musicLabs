import { Box } from "@mui/material";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";

configure({ adapter: new Adapter() });

describe("<Footer />", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it("should exist the Footer", () => {
    const footerBox = wrapper.find(Box);
    expect(footerBox).toHaveLength(1);
  });
});