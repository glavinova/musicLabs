import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button } from "@mui/material";
import DownloadButton from "./DownloadBtn";
import { assert } from "chai";

configure({ adapter: new Adapter() });

describe("<DownloadButton />", () => {
  it("should show the Download Button", async () => {
    assert.isDefined(<DownloadButton />);
    const wrapper = shallow(<DownloadButton />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("should click on the Download Button", () => {
    const onDownload = jest.fn();
    const button = shallow(<Button onClick={onDownload}>Download</Button>);
    button.simulate("click");
    expect(onDownload.mock.calls.length).toEqual(1);
  });

  it("should download the file", () => {
    const a: any = {
      click: jest.fn(),
    };
    jest.spyOn(document, "createElement").mockImplementation(() => a);
    const { onDownload } = require("./DownloadBtn");
    onDownload();
    expect(a.download).toEqual("sample_music_sheets.pdf");
    expect(a.href).toEqual("./music_sheets_pdf/sample_music_sheets.pdf");
    expect(a.click).toHaveBeenCalledTimes(1);
  });
});
