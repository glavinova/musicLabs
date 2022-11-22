import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid, CardActionArea, Card, CardContent, CardMedia, Button } from '@mui/material';
import appConstants from '../../constants/app-constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from '@mui/material/Link';
import { useLocation  } from 'react-router';
import DownloadIcon from '@mui/icons-material/Download';

export default function SongDetails() {
  const {state} = useLocation();
  const [data, setData] = useState(state);

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `sample_music_sheets.pdf`;
    link.href = "./music_sheets_pdf/sample_music_sheets.pdf";
    link.click();
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
       <img src="./images/logo.png" alt="Logo" style={{width: "300px", height: "70px", margin: "10px 0"}} />
      </Toolbar>
      <Grid item xs={12} md={6} sx={{marginTop: "20px"}}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex', height: "55vh" }}>
        <CardMedia
            component="img"
            sx={{ width:"350px", height: "400px", objectFit: "cover", paddingLeft: "30px", display: { xs: 'none', sm: 'block' } }}
            image={appConstants.gridItemImageSrc}
            alt="songSheets"
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {data.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{marginBottom: "20px"}}>
                BY {data.artist}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              <b>Price:</b> ${data.price}
              <br/>
              <b>Instrument:</b> {data.instrument}
              <br/>
              <b>Pages:</b> {data.pages}
              <br/>
              <b>Duration:</b> {data.duration}
              <br/>
              <b>Genre:</b> {data.genre}
              <br/>
              <b>Key:</b> {data.songKey}
              <br/>
              <b>Difficulty level:</b> {data.difficulty}
              <br/>
            </Typography>
            <Button size='large' variant="contained" endIcon={<ShoppingCartIcon />}>
                BUY
            </Button>
            <Button onClick={onDownload} size='large' variant="contained" color="primary" startIcon={<DownloadIcon />} sx={{marginLeft: "10px"}}>
              Download
            </Button>
          </CardContent>
          <CardContent sx={{ flex: 1 }}>
          <Typography variant="subtitle1" paragraph sx={{marginTop: "75px"}}>
              <b>Song Description</b>
              <br/>
                {data.description}
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