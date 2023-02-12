import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { IMainFeaturedPostProps } from "../../interfaces/app-interfaces";
import styles from "./MainFeaturedPost.module.scss";

export default function MainFeaturedPost(props: IMainFeaturedPostProps) {
  return (
    <Paper
      sx={{ backgroundImage: `url(${props.post.image})` }}
      className={styles.paperCustomStyle}
    >
      {
        <img
          className={styles.displayNone}
          src={props.post.image}
          alt={props.post.imageText}
        />
      }
      <Box className={styles.boxCustomStyle} />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
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
