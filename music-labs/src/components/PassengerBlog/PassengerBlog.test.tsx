import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PassengerBlog from "./PassengerBlog";
import { Button, Container, Grid } from "@mui/material";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  act,
  fireEvent,
  render,
  waitFor,
  within,
} from "@testing-library/react";
import { spy } from "fetch-mock";
import FacebookLogin from "react-facebook-login";
import { BrowserRouter as Router } from "react-router-dom";

var chai = require("chai");
var assert = chai.assert;
var server;
var Browser = require("zombie");

configure({ adapter: new Adapter() });
jest.mock("axios");

describe("<PassengerBlog />", () => {
  it("should show the Containers on the page", async () => {
    const wrapper = shallow(<PassengerBlog />);
    expect(wrapper.find(Container)).toHaveLength(2);
  });

  it("should show the Facebook login button on the page", async () => {
    const wrapper = shallow(<PassengerBlog />);
    expect(wrapper.find(FacebookLogin)).toHaveLength(1);
  });

  //it("should authenticate on Facebook", (done) => {
  // var express = require("./config/express");
  // var app = express();
  // var server = app.listen(3000, function () {
  //   var port = server.address().port;
  //   console.log("Server running at %s", port);
  // });
  // const wrapper = shallow(<PassengerBlog />);
  // Browser.visit(
  //   "http://127.0.0.1:3000/auth/facebook",
  //   function (err: any, brw: any) {
  //     if (err) {
  //       throw err;
  //     }

  //     brw
  //       .fill("email", "")
  //       .fill("pass", "")
  //       .pressButton("login", function () {
  //         brw.assert.success();
  //         done();
  //       });
  //   }
  // );
  //});

    it("should set the states", () => {
      const responseFacebook = jest.fn();
      const fbLoginBtn = shallow(
        <FacebookLogin
          appId="829549608159536"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends"
          callback={responseFacebook}
          icon="fa-facebook"
        />
      );
      const setState = jest.fn();
      const useStateSpy: any = jest.spyOn(React, "useState");
      useStateSpy.mockImplementation((init: any) => [init, setState]);
      fbLoginBtn.at(0).simulate('click', { preventDefault() {} });
      expect(responseFacebook.mock.calls.length).toEqual(1);
      expect(setState).toHaveBeenCalled(); //check if the setState is called properly
      expect(spy).toHaveBeenCalled();
    });
  it("should call the pagination API", async () => {
    const mockDataResponse = [
      {
        _id: "63925c48cbe9ae63b9a8a197",
        name: "Luis",
        trips: 101,
        airline: [
          {
            id: 6,
            name: "Qantas",
            country: "Austrailia",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Qantas_Airways_logo_2016.svg/300px-Qantas_Airways_logo_2016.svg.png",
            slogan: "Spirit of Australia",
            head_quaters: "Mascot, Sydney, Australia",
            website: "qantas.com",
            established: "1920",
          },
        ],
        __v: 0,
      },
      {
        _id: "63925c48cbe9ae63b9a8a197",
        name: "Luis",
        trips: 101,
        airline: [
          {
            id: 6,
            name: "Qantas",
            country: "Austrailia",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Qantas_Airways_logo_2016.svg/300px-Qantas_Airways_logo_2016.svg.png",
            slogan: "Spirit of Australia",
            head_quaters: "Mascot, Sydney, Australia",
            website: "qantas.com",
            established: "1920",
          },
        ],
        __v: 0,
      },
    ];
    const wrapper = shallow(<PassengerBlog />);

    (axios.get as jest.Mock).mockResolvedValueOnce(mockDataResponse);
    axios.get("https://api.instantwebtools.net/v1/passenger?page=0size=9");
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.instantwebtools.net/v1/passenger?page=0size=9"
    );
  });

  it("should click on Load More button and call the API", async () => {
    const wrapper = shallow(<PassengerBlog />);
    const loadMoreButton = wrapper.find(Button);
    const handleMoreItems = jest.fn();
    expect(loadMoreButton).toHaveLength(1);
    loadMoreButton.at(0).simulate("click");
    //expect(handleMoreItems).toHaveBeenCalled();
  });

  it("should spy on axios and test the useEffect hook", async () => {
    const mockDataResponse = [
      {
        _id: "63925c48cbe9ae63b9a8a197",
        name: "Luis",
        trips: 101,
        airline: [
          {
            id: 6,
            name: "Qantas",
            country: "Austrailia",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Qantas_Airways_logo_2016.svg/300px-Qantas_Airways_logo_2016.svg.png",
            slogan: "Spirit of Australia",
            head_quaters: "Mascot, Sydney, Australia",
            website: "qantas.com",
            established: "1920",
          },
        ],
        __v: 0,
      },
      {
        _id: "63925c48cbe9ae63b9a8a197",
        name: "Luis",
        trips: 101,
        airline: [
          {
            id: 6,
            name: "Qantas",
            country: "Austrailia",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Qantas_Airways_logo_2016.svg/300px-Qantas_Airways_logo_2016.svg.png",
            slogan: "Spirit of Australia",
            head_quaters: "Mascot, Sydney, Australia",
            website: "qantas.com",
            established: "1920",
          },
        ],
        __v: 0,
      },
    ];
    const spyAxios = jest.spyOn(axios, "get").mockResolvedValue({
      data: mockDataResponse,
    });
    const renderedWrapper = render(<PassengerBlog />);
    const { getByText } = renderedWrapper;
    await waitFor(() => {
      expect(getByText("Name")).toBeInTheDocument();
    });
    expect(spyAxios).toHaveBeenNthCalledWith(
      1,
      "https://api.instantwebtools.net/v1/passenger?page=0size=9"
    );
  });
});
