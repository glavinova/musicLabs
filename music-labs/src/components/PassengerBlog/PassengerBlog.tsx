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
import axios from "axios";

function PassengerBlog() {
  const perPage = 9;
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleMoreItems = () => {
      setLoading(true);
      axios
        .get(
          `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${perPage}`
        )
        .then((res: any) => {
          setTotalPages(res.data.totalPages);
          console.log(totalPages);
          setData(data.concat(res.data.data));
          setLoading(false);
        });
    };
    handleMoreItems();
  }, [page]);

  return (
    <React.Fragment>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {data.map((i: any, index: any) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={styles.card}>
                <CardMedia
                  component="img"
                  className={styles.cardMedia}
                  image={i.airline[0].logo}
                  alt="logo"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Name: {i.name}
                  </Typography>
                  <Typography>Number of trips: {i.trips}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {totalPages >= page ? (
          <Button
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
}

export default PassengerBlog;
