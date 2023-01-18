import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import styles from "./PassengerBlog.module.css";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import FacebookLogin from "react-facebook-login";
import dummyApiAxiosClient from "../../interceptors/dummy-api-axios-interceptor";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PassengerBlog = () => {
  const perPage = 9;
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  //Facebook authentiaction
  const [fbLogin, setFbLogin] = useState(false);
  const [fbData, setFbData] = useState({ name: "", email: "" });
  const [fbPicture, setFbPicture] = useState("");

  const responseFacebook = (response: any) => {
    setFbData(response);
    setFbPicture(response.picture.data.url);
    if (response.accessToken) {
      setFbLogin(true);
    } else {
      setFbLogin(false);
    }
  };

  const handleMoreItems = () => {
    setLoading(true);
    dummyApiAxiosClient()
      .get(
       `https://dummyapi.io/data/v1/user?page=${page}&limit=${perPage}`
      )
      .then((res: any) => {
        setTotalPages(res.data.total);
        setData(data.concat(res.data.data));
        setLoading(false);
      });
  };

  useEffect(() => {
    handleMoreItems();
  }, [page]);

  return (
    <React.Fragment>
      <Container sx={{ marginBottom: "30px", marginRight: 0, width: "350px" }}>
        <div>
          {!fbLogin && (
            <FacebookLogin
              appId="829549608159536"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook"
              buttonStyle={{ width: "300px", height: "60px" }}
              data-testid="facebookLoginBtn"
            />
          )}
          {fbLogin && (
            <CardMedia
              component="img"
              image={fbPicture}
              alt="fbProfilePicture"
              sx={{
                width: 50,
                height: 50,
                float: "right",
                borderRadius: 7,
                marginTop: "-15px",
              }}
            />
          )}
        </div>
        {fbLogin && (
          <h5 style={{ marginLeft: "100px", marginTop: "15px" }}>
            {fbData.name}
          </h5>
        )}
      </Container>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {data.map((i: any, index: any) => (
            <Grid
              data-testid="gridPassenger"
              id="gridPassengerItem"
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
            >
              <Card className={styles.card}>
                <LazyLoadImage  
                  className={styles.cardMedia}
                  src={i.picture}
                  alt="logo"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom sx={{fontSize: "18px", fontWeight: "bold"}}>
                    Name: <i>{i.firstName} {i.lastName} </i>
                  </Typography>
                  <Typography>Title: {i.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {totalPages >= page ? (
          <Button
            data-testid="loadMoreBtn"
            size="large"
            variant="outlined"
            endIcon={<ExpandCircleDownIcon />}
            className={styles.loadBtn}
            onClick={() => setPage(page + 1)}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </Button>
        ) : (
          <Typography className={styles.endOfText}>
            You have reached the end of the page.
          </Typography>
        )}
      </Container>
      <Toolbar
        component="nav"
        variant="dense"
        className={styles.toolbarCustomStyle}
      ></Toolbar>
    </React.Fragment>
  );
};

export default PassengerBlog;
