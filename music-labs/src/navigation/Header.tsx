import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import ListGridItems from '../components/GridItem/ListGridItems';
import MainFeaturedPost from '../components/MainFeaturedPost';
import { Link } from '@mui/material';
import appConstants from '../constants/app-constants';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '50%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  fontSize: '20px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 6),
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '3ch',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));

export default function Header() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value.toLowerCase());
  };

  return (
    <React.Fragment>

      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <img src="./images/logo.png" alt="Logo" style={{width: "300px", height: "70px", margin: "10px 0"}} />
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              type='text'
              placeholder="Search for Artist Name, Song Title, Genre or Instrument..."   
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
         </Search>
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ overflowX: 'auto' }}
      >
        {appConstants.sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0, marginRight: '20px' }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>

      <MainFeaturedPost post={appConstants.mainFeaturedPost} />

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      > 
      <ListGridItems filteredTerm={searchInput} />
      </Toolbar>

    </React.Fragment>
  );
}