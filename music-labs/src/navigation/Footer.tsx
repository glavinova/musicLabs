import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { BottomNavigationAction } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Music Labs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6}}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
            <BottomNavigationAction sx={{color: 'black'}} icon={<FacebookIcon />} />
            <BottomNavigationAction sx={{color: 'black'}} icon={<GoogleIcon />} />
            <BottomNavigationAction sx={{color: 'black'}} icon={<InstagramIcon />} />
            <BottomNavigationAction sx={{color: 'black'}} icon={<LinkedInIcon />} />
            <BottomNavigationAction sx={{color: 'black'}} icon={<GitHubIcon />} />
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Music notes for everyone !
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}