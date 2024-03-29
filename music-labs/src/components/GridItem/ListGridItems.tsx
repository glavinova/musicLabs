import {
  Grid,
  Container,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { ISongDetails } from "../../interfaces/app-interfaces";
import GridItemData from "../../interfaces/girdItemDummyData";
import GridItem from "./GridItem";
import AppContext from "../../context/app-context";
import styles from "./ListGridItems.module.scss";

export default function ListGridItems() {
  const appCtx = useContext(AppContext);
  const { filterTerm } = appCtx;
  const sortedData = GridItemData.sort((a, b) => (a.name < b.name ? -1 : 1));
  const [data, setItemsData] = useState(sortedData);
  const [selectedSortType, setSortType] = useState("a-z");
  const sortItems = (selectEvent: any) => {
    const options: any = {
      "a-z": [...data].sort((a, b) => (a.name < b.name ? -1 : 1)),
      "z-a": [...data].sort((a, b) => (a.name < b.name ? 1 : -1)),
      "low-high": [...data].sort((a, b) => (a.price < b.price ? -1 : 1)),
      "high-low": [...data].sort((a, b) => (a.price < b.price ? 1 : -1)),
    };
    setItemsData(options[selectEvent.target.value]);
    setSortType(selectEvent.target.value);
  };
  return (
    <Grid container className={styles.width100}>
      <Container>
        <FormControl
          className={styles.formControlCustomStyle}
          sx={{ margin: "10px -20px" }}
        >
          <InputLabel id="sort-label" className={styles.select}>
            Sort
          </InputLabel>
          <Select
            labelId="sort-label"
            id="sortLabel"
            data-testid="sortLabel"
            value={selectedSortType}
            label="Sort"
            role="listbox"
            onChange={sortItems}
            className={styles.select}
          >
            <MenuItem value="a-z">Song Name (Ascending)</MenuItem>
            <MenuItem value="z-a">Song Name (Descending)</MenuItem>
            <MenuItem value="low-high">Price (Low-High)</MenuItem>
            <MenuItem value="high-low">Price (High-Low)</MenuItem>
          </Select>
        </FormControl>
      </Container>
      <main className={styles.width100}>
        <Grid container spacing={4}>
          {data
            .filter((item) => {
              if (filterTerm === "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(filterTerm.toLowerCase()) ||
                item.artist.toLowerCase().includes(filterTerm.toLowerCase()) ||
                item.instrument
                  .toLowerCase()
                  .includes(filterTerm.toLowerCase()) ||
                item.genre.toLowerCase().includes(filterTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((i: ISongDetails, index: any) => (
              <GridItem
                key={index}
                id={i.id}
                name={i.name}
                artist={i.artist}
                parts={i.parts}
                pages={i.pages}
                duration={i.duration}
                genre={i.genre}
                instrument={i.instrument}
                price={i.price}
                songKey={i.songKey}
                difficulty={i.difficulty}
                description={i.description}
              />
            ))}
        </Grid>
      </main>
    </Grid>
  );
}
