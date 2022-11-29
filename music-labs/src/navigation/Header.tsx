import React from "react";
import NavMenu from "./NavMenu";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Header() {
  return (
    <React.Fragment>
      <SearchBar />
      <NavMenu />
    </React.Fragment>
  );
}
