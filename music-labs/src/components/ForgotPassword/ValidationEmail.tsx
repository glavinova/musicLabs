import React, { useContext, useEffect } from "react";
import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import AppContext from "../../context/app-context";
import styles from './ForgotPassword.module.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      margin: 30,
    },
    button: {
      margin: theme.spacing(1),
    },
    message: {
      paddingTop: 10,
      minWidth: 200,
      maxWidth: 730,
      textAlign: "center",
    },
  })
);

const ValidationEmail = () => {
  const classes = useStyles();
  const appCtx = useContext(AppContext);
  useEffect(() => {
    appCtx.setCurrentUrl("/reset-password-email-sent");
  });

  return (
    <React.Fragment>
      <div className={classes.body}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={styles.minHeight50}
        >
          <Typography align="center" variant="h1" color="secondary" id="title">
            Check your email!
          </Typography>

          <p className={classes.message} id="textContent">
            An email has been sent to your email address containing a link that
            will let you reset your password. If you do not receive an email
            within a few minutes, please check your spam folder.
          </p>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default ValidationEmail;
