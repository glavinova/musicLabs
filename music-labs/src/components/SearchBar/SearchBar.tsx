import React, { useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AppContext from "../../context/app-context";
import styles from "./SearchBar.module.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "50%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize: "20px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 6),
    transition: theme.transitions.create("width"),
    width: "100%",
    height: "3ch",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

export default function SearchBar() {
  const appCtx = useContext(AppContext);
  const handleChange = (e: any) => {
    e.preventDefault();
    appCtx.setSearchInput(e.target.value.toLowerCase());
  };
  const showSearchBar: boolean = appCtx.currentUrl === "/";
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <img
          src="./images/logo.png"
          alt="Logo"
          className={styles.imgCustomStyle}
        />
        <Search sx={{ display: showSearchBar ? "" : "none" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <div data-testid="search-bar">
            <StyledInputBase
              id="searchBar"
              type="text"
              placeholder="Search for Artist Name, Song Title, Genre or Instrument..."
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
            />
          </div>
        </Search>
      </Toolbar>
    </React.Fragment>
  );
}
