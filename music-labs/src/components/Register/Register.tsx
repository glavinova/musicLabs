import {
  Grid,
  Paper,
  TextField,
  Button,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/app-context";
import useValidation from "../../hooks/use-validation";
import validateEmail from "../../validators/validateEmail";
import validatePassword from "../../validators/validatePassword";
import * as actions from "../../store/actions/index";
import styles from "./Register.module.scss";
import { connect } from "react-redux";

function Register(props: any) {
  const appCtx = useContext(AppContext);
  useEffect(() => {
    appCtx.setCurrentUrl("/register");
  });
  const navigate = useNavigate();

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    isEmpty: emailIsEmpty,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useValidation(validateEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    isEmpty: passwordIsEmpty,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useValidation(validatePassword);

  const {
    value: confirmPasswordValue,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordInputHasError,
    isEmpty: confirmPasswordIsEmpty,
    valueChangeHandler: confirmPasswordChangedHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: confirmPasswordReset,
  } = useValidation((value) => {
    return value === passwordValue && validatePassword(value);
  });

  let formIsValid = false;
  emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid &&
    (formIsValid = true);

  function submitHandler(event: any) {
    passwordBlurHandler();
    emailBlurHandler();

    event.preventDefault();
    props.onAuth(emailValue, passwordValue, true);

    if (formIsValid) {
      emailReset();
      passwordReset();
      confirmPasswordReset();
      navigate("/");
    }
  }

  return (
    <React.Fragment>
      <Paper className={styles.paper}>
        <h3 id="header"> Register </h3>
        <form aria-label="form" id="form" onSubmit={submitHandler}>
          <Grid container spacing={2} item zeroMinWidth className={styles.form}>
            <Grid item xs={12}>
              <label htmlFor="email"> Email * </label>
              <TextField
                variant="outlined"
                id="email"
                name="email"
                autoComplete="email"
                error={emailInputHasError}
                helperText={
                  emailIsEmpty
                    ? "Email is required"
                    : emailInputHasError
                    ? "Invalid email format"
                    : ""
                }
                onChange={emailChangedHandler}
                onBlur={emailBlurHandler}
                value={emailValue}
                inputProps={{ maxLength: 50 }}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="password"> Password * </label>
              <Tooltip
                title="At least 8 but maximum 40 characters, must contain big letter and special character (!@#$%^&*)"
                arrow
              >
                <TextField
                  variant="outlined"
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  error={passwordInputHasError}
                  helperText={
                    passwordIsEmpty
                      ? "Password is required"
                      : passwordInputHasError
                      ? "Invalid password format"
                      : ""
                  }
                  onChange={passwordChangedHandler}
                  onBlur={passwordBlurHandler}
                  value={passwordValue}
                  inputProps={{ maxLength: 40 }}
                />
              </Tooltip>
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="confirmPassword"> Confirm Password * </label>
              <TextField
                variant="outlined"
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
                error={confirmPasswordInputHasError}
                helperText={
                  confirmPasswordIsEmpty
                    ? "Confirm password is required"
                    : confirmPasswordValue !== passwordValue &&
                      confirmPasswordInputHasError
                    ? "Passwords did not match"
                    : confirmPasswordInputHasError
                    ? "Invalid confirm password format"
                    : ""
                }
                onChange={confirmPasswordChangedHandler}
                onBlur={confirmPasswordBlurHandler}
                value={confirmPasswordValue}
                inputProps={{ maxLength: 40 }}
                sx={{ marginBottom: "20px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                id="submitBtn"
                fullWidth
                variant="contained"
                color="primary"
              >
                Create Account
              </Button>
              <CircularProgress sx={{ display: props.loading ? "" : "none" }} />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAuth: (email: string, password: string, isSignUp: boolean) =>
      dispatch(actions.auth(email, password, isSignUp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
