import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { IMainFeaturedPostProps } from '../interfaces/app-interfaces';

export default function MainFeaturedPost(props: IMainFeaturedPostProps) {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${props.post.image})`,
      }}
    >
      {<img style={{ display: 'none' }} src={props.post.image} alt={props.post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {props.post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {props.post.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}