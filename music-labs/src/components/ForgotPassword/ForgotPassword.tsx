import { Grid, Typography, TextField, Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import AppContext from "../../context/app-context";
import useValidation from "../../hooks/use-validation";
import validateEmail from "../../validators/validateEmail";
import styles from "./ForgotPassword.module.scss";
import { useEffect } from "react";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const appCtx = useContext(AppContext);
  useEffect(() => {
    appCtx.setCurrentUrl("/forgot-password");
  });

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
  } = useValidation(validateEmail);

  const proceedHandler = () => {
    emailBlurHandler();
    let formIsValid = false;
    if (emailIsValid) {
      formIsValid = true;
    }
    if (formIsValid) {
      navigate("/reset-password-email-sent");
    }
  };
  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        id="container"
        className={styles.gridCustomStyle}
      >
        <Grid item xs={12}>
          <h3
            id="header"
            data-testid="header"
            className={styles.forgotPassHeader}
          >
            Forgot your password ?
          </h3>
        </Grid>
        <Typography
          className={styles.paragraph}
          id="textFirstPart"
          data-testid="textFirstPart"
        >
          If you don't have an account, <Link to="/register"> click here</Link>{" "}
          to set up a new account (it's free).
        </Typography>
        <Typography
          className={styles.lastparagraph}
          id="textSecondPart"
          data-testid="textSecondPart"
        >
          If you already have account, please enter your email below, so we can
          send you validation code by e-mail.
        </Typography>
        <Grid item xs={12} className={styles.gridInput}>
          <br />
          <TextField
            required
            id="email"
            placeholder="Email"
            type="text"
            variant="outlined"
            error={emailInputHasError}
            helperText={emailInputHasError ? "Invalid email address" : ""}
            onChange={emailChangedHandler}
            value={emailValue}
            inputProps={{ maxLength: 50 }}
            className={styles.proceedBtn}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            onClick={proceedHandler}
            variant="contained"
            color="secondary"
            className={styles.proceedBtn}
            id="proceedBtn"
          >
            Proceed
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ForgotPassword;
