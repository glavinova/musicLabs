import React from 'react';
import { Grid, Container, InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import { useState } from 'react';
import { IGridItemData } from '../../interfaces/dummyDataInterface';
import GridItemData from '../../interfaces/girdItemDummyData';
import GridItem from './GridItem';

export default function ListGridItems(props: any) {
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
    }
    return(
        <Grid container sx={{width:'100%'}}>
        <Container >
        <FormControl sx={{width: '20%', margin: '10px -20px', float: 'right'}}>
            <InputLabel id="sort-label">Sort</InputLabel>
            <Select
            labelId="sort-label"
            id="sortLabel"
            value={selectedSortType}
            label="Sort"
            onChange={sortItems}
            >
            <MenuItem value="a-z">Song Name (Ascending)</MenuItem>
            <MenuItem value="z-a">Song Name (Descending)</MenuItem>
            <MenuItem value="low-high">Price (Low-High)</MenuItem>
            <MenuItem value="high-low">Price (High-Low)</MenuItem>
            </Select>
            </FormControl>
        </Container>      
        <main>
            <Grid container spacing={4}>
            {data.filter(item => {
                if(props.filteredTerm === ''){
                    return item;
                }
                else if(item.name.toLowerCase().includes(props.filteredTerm.toLowerCase()) || item.artist.toLowerCase().includes(props.filteredTerm.toLowerCase())){
                    return item;
                }
            }).map((i:IGridItemData, index: any) => 
                <GridItem
                key={index}
                name={i.name}
                artist={i.artist}
                parts={i.parts}
                pages={i.pages}
                duration={i.duration}
                genre={i.genre}
                instrument={i.instrument}
                price={i.price} />
                )
            }
            </Grid>
        </main>  
        </Grid>
    )
}