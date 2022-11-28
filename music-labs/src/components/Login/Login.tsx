import {
  Grid,
  Paper,
  FormControl,
  TextField,
  Button,
  Modal,
  Typography,
  CircularProgress,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../../context/app-context";
import useValidation from "../../hooks/use-validation";
import validateEmail from "../../validators/validateEmail";
import validatePassword from "../../validators/validatePassword";
import styles from "./Login.module.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

function Login(props: any) {
  const appCtx = useContext(AppContext);

  useEffect(() => {
    appCtx.setCurrentUrl("/login");
  }, []);

  const navigate = useNavigate();
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useValidation(validatePassword);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
  } = useValidation(validateEmail);

  let formIsValid = false;
  emailIsValid && passwordIsValid && (formIsValid = true);

  function submitHandler(event: any) {
    passwordBlurHandler();
    emailBlurHandler();

    event.preventDefault();
    props.onAuth(event.target[1].value, event.target[3].value, false);

    if (formIsValid) {
      navigate("/");
    }
  }

  return (
    <React.Fragment>
      <Modal open={props.showModal} onClose={props.onClose}>
        <form aria-label="form" onSubmit={submitHandler}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "70vh" }}
          >
            <Paper className={styles.form}>
              <Button
                onClick={props.onClose}
                color="primary"
                sx={{
                  float: "right",
                  marginTop: "-30px",
                  marginRight: "-40px",
                }}
              >
                X
              </Button>
              <h3>Login</h3>
              <Grid item xs={12} className={styles.textField}>
                <FormControl fullWidth>
                  <TextField
                    id="email"
                    type="text"
                    variant="outlined"
                    placeholder="Email"
                    autoComplete="Email"
                    error={
                      emailInputHasError || passwordInputHasError || props.error
                    }
                    helperText={emailInputHasError ? "" : ""}
                    onChange={emailChangedHandler}
                    value={emailValue}
                    inputProps={{ maxLength: 50 }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} className={styles.textField}>
                <FormControl fullWidth>
                  <TextField
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    placeholder="Password"
                    error={
                      passwordInputHasError || emailInputHasError || props.error
                    }
                    helperText={
                      passwordInputHasError || emailInputHasError || props.error
                        ? "Invalid credentials"
                        : ""
                    }
                    onChange={passwordChangedHandler}
                    value={passwordValue}
                    inputProps={{ maxLength: 40 }}
                  />
                </FormControl>
                <br />
                <Link
                  to="/forgot-password"
                  id="forgotPassword"
                  style={{ fontSize: "10px", color: "gray", float: "right" }}
                  onClick={props.onClose}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.loginBtn}
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
                <CircularProgress
                  sx={{ display: props.loading ? "" : "none" }}
                />
              </Grid>
              <Typography>
                {" "}
                Need an account ? <br />{" "}
                <Link
                  to="/register"
                  id="register"
                  style={{ color: "#BD4B4B" }}
                  onClick={props.onClose}
                >
                  Sing Up
                </Link>{" "}
                now!
              </Typography>
            </Paper>
          </Grid>
        </form>
      </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
