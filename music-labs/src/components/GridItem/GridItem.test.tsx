import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GridItem from "./GridItem";
import appConstants from "../../constants/app-constants";
import {
  GenreEnum,
  DificulltyLevelEnum,
} from "../../interfaces/app-interfaces";

configure({ adapter: new Adapter() });

describe("<GridItem />", () => {
  let wrapper: any;
  const props = {
    id: 1,
    name: "Allegro in A Major",
    artist: "W.F.Bach",
    parts: 1,
    pages: 4,
    duration: "02:36",
    genre: GenreEnum.Classical,
    instrument: "piano",
    price: 17.99,
    songKey: "D Major",
    difficulty: DificulltyLevelEnum.Intermediate,
    description: appConstants.loremIpsumDescription,
  };

  beforeEach(() => {
    wrapper = shallow(
      <GridItem
        id={0}
        name={""}
        artist={""}
        parts={0}
        pages={0}
        duration={""}
        genre={GenreEnum.Classical}
        instrument={""}
        price={0}
        songKey={""}
        difficulty={DificulltyLevelEnum.Beginner}
        description={""}
      />
    );
  });

  it("props should appear on the home page", () => {
    wrapper.setProps({
      id: props.id,
      name: props.name,
      artist: props.artist,
      parts: props.parts,
      pages: props.pages,
      duration: props.duration,
      genre: props.genre,
      instrument: props.instrument,
      price: props.price,
      songKey: props.songKey,
      difficulty: props.difficulty,
      description: props.description,
    });

    expect(wrapper.contains("Allegro in A Major")).toEqual(true);
    expect(wrapper.contains("W.F.Bach")).toEqual(true);
    expect(wrapper.contains(4)).toEqual(true);
    expect(wrapper.contains(1)).toEqual(true);
    expect(wrapper.contains("piano")).toEqual(true);
    expect(wrapper.contains("Classical")).toEqual(true);
    expect(wrapper.contains(17.99)).toEqual(true);
    expect(wrapper.contains("More information...")).toEqual(true);
  });
});
