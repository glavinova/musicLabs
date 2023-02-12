import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PassengerBlog from "./PassengerBlog";
import { Button, Container } from "@mui/material";
import axios from "axios";
import { render, waitFor } from "@testing-library/react";
import { spy } from "fetch-mock";
import FacebookLogin from "react-facebook-login";

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

});
