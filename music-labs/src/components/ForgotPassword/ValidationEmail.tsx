import React, { useContext, useEffect } from "react";
import { Grid } from "@material-ui/core";
import AppContext from "../../context/app-context";
import styles from "./ForgotPassword.module.css";

const ValidationEmail = () => {
  const appCtx = useContext(AppContext);
  useEffect(() => {
    appCtx.setCurrentUrl("/reset-password-email-sent");
  });

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={styles.body}
      >
        <h1 className={styles.title}>Check your email!</h1>

        <p className={styles.message}>
          An email has been sent to your email address containing a link that
          will let you reset your password. If you do not receive an email
          within a few minutes, please check your spam folder.
        </p>
      </Grid>
    </React.Fragment>
  );
};

export default ValidationEmail;
