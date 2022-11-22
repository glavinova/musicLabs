import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { ISongDetails } from '../../interfaces/app-interfaces';
import appConstants from '../../constants/app-constants';
import { Link } from 'react-router-dom';

export default function GridItem(props: ISongDetails) {
  const partText = props.parts === 1? 'part' : 'parts';

  return (
    <Grid item xs={12} md={6} sx={{paddingBottom:'5px'}}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex', width: '100%' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {props.name} - {props.artist}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {props.pages} pages • {props.parts} {partText} • {props.duration}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {props.instrument} • {props.genre}
              <br/>
              ${props.price}
            </Typography>
            <Typography variant="subtitle1" color="primary">
             <Link 
              to="/details" 
              state={props}
              style={{textDecoration: "none", color: "#1976d2", cursor: "pointer"}}>
                 More information... 
             </Link> 
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={appConstants.gridItemImageSrc}
            alt="songSheets"
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}