import React, { useContext, useEffect, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import appConstants from "../../constants/app-constants";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "@mui/material/Link";
import { useLocation } from "react-router";
import styles from "./SongDetails.module.css";
import AppContext from "../../context/app-context";
import DownloadButton from "../DownloadButton/DownloadBtn";
import { connect } from "react-redux";

function SongDetails(props: any) {
  const { state } = useLocation();
  const [data] = useState(state);
  const appCtx = useContext(AppContext);
  useEffect(() => {
    appCtx.setCurrentUrl("/details");
  });

  return (
    <React.Fragment>
      <Grid item xs={12} md={6} className={styles.marginTop20}>
        <CardActionArea component="span">
          <Card className={styles.cardCustomStyle}>
            <CardMedia
              component="img"
              sx={{ display: { xs: "none", sm: "block" } }}
              className={styles.cardMediaCustomStyle}
              image={appConstants.gridItemImageSrc}
              alt="songSheets"
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {data.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                className={styles.marginBottom20}
              >
                BY {data.artist}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                <b>Price:</b> ${data.price}
                <br />
                <b>Instrument:</b> {data.instrument}
                <br />
                <b>Pages:</b> {data.pages}
                <br />
                <b>Duration:</b> {data.duration}
                <br />
                <b>Genre:</b> {data.genre}
                <br />
                <b>Key:</b> {data.songKey}
                <br />
                <b>Difficulty level:</b> {data.difficulty}
                <br />
              </Typography>
              {!props.isAuthenticated ? (
                <Button
                  size="large"
                  variant="contained"
                  endIcon={<ShoppingCartIcon />}
                >
                  BUY
                </Button>
              ) : (
                <></>
              )}
              {props.isAuthenticated ? <DownloadButton /> : <></>}
            </CardContent>
            <CardContent sx={{ flex: 1 }}>
              <Typography
                variant="subtitle1"
                paragraph
                className={styles.marginTop75}
              >
                <b>Song Description</b>
                <br />
                {data.description}
              </Typography>
              <Button className={styles.floatRight}>
                <Link href="/" underline="none" color="primary">
                  <ArrowBackIcon className={styles.fontSize15} />
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
        className={styles.toolbarCustomStyle}
      ></Toolbar>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(SongDetails);
