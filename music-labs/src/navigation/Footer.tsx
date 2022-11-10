import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { BottomNavigation, BottomNavigationAction, Box, Container, Typography } from '@mui/material';

export default function App() {
  return (
    <BottomNavigation sx={{background: "#618985", position: 'absolute', bottom: 0, width: '100%', height: '110px' }}>
        <Container>
        <Box component="div" sx={{ display: 'block', width: '100%' }}>
            <BottomNavigationAction sx={{color: 'white'}} label="Home" icon={<FacebookIcon />} />
            <BottomNavigationAction sx={{color: 'white'}} label="Home" icon={<GoogleIcon />} />
            <BottomNavigationAction sx={{color: 'white'}} label="Home" icon={<InstagramIcon />} />
            <BottomNavigationAction sx={{color: 'white'}} label="Home" icon={<LinkedInIcon />} />
            <BottomNavigationAction sx={{color: 'white'}} label="Home" icon={<GitHubIcon />} />

        </Box>

        <Box component="div" sx={{ display: 'block', width: '100%'}}>
        <Typography sx={{marginTop: '5px', color: 'white', textAlign: 'center'}}> 
            © 2022 Copyright:
            <br/>
                Music Labs
          </Typography>
        </Box>
       
        </Container>
        

    </BottomNavigation>




  );
}