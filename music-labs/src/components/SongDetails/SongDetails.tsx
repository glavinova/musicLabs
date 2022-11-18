import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid, CardActionArea, Card, CardContent, CardMedia, Button } from '@mui/material';
import appConstants from '../../constants/app-constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from '@mui/material/Link';
import DownloadButton from '../Download Button/DownloadBtn';

export default function SongDetails(props: any) {
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
       <img src="./images/logo.png" alt="Logo" style={{width: "300px", height: "70px", margin: "10px 0"}} />
      </Toolbar>
      <Grid item xs={12} md={6} sx={{marginTop: "20px"}}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex', height: "50vh" }}>
        <CardMedia
            component="img"
            sx={{ width:"350px", height: "400px", objectFit: "cover", paddingLeft: "30px", display: { xs: 'none', sm: 'block' } }}
            image={appConstants.gridItemImageSrc}
            alt="songSheets"
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {props.name} Song Name
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{marginBottom: "20px"}}>
                BY {props.artist} Artist Name
            </Typography>
            <Typography variant="subtitle1" paragraph>
              <b>Price:</b> ${props.price}15.99
              <br/>
              <b>Instrument:</b> {props.instrument} piano/guitar
              <br/>
              <b>Pages:</b> {props.pages} 1 page
              <br/>
              <b>Duration:</b> {props.duration} 12:46
              <br/>
              <b>Genre:</b> {props.genre} Classical
              <br/>
              <b>Key:</b> D major, B minor
              <br/>
              <b>Difficulty level:</b> Begginer
              <br/>
            </Typography>
            <Button size='large' variant="contained" endIcon={<ShoppingCartIcon />}>
                BUY
            </Button>
            <DownloadButton />
          </CardContent>
          <CardContent sx={{ flex: 1 }}>
          <Typography variant="subtitle1" paragraph sx={{marginTop: "75px"}}>
              <b>Song Description</b>
              <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta lacinia magna eget mollis. Fusce bibendum faucibus dolor, a lobortis ligula rutrum at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta lacinia magna eget mollis. Fusce bibendum faucibus dolor, a lobortis ligula rutrum at.
          </Typography>
          <Button >
            <Link href='/' underline="none" color="primary" sx={{float: "right"}}>   
              <ArrowBackIcon style={{ fontSize: 15 }} />
              &nbsp;Back 
            </Link>
            </Button>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      > 
      </Toolbar>
    </React.Fragment>
  );
}