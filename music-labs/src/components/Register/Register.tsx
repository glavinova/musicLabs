import { Grid, Paper, FormControl, TextField, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/app-context";
import useValidation from "../../hooks/use-validation";
import validateEmail from "../../validators/validateEmail";
import validatePassword from "../../validators/validatePassword";
import styles from "./Register.module.css";

function Register() {
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const appCtx = useContext(AppContext);
  useEffect(() => {
    appCtx.setCurrentUrl("/register");
  }, []);

  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   setIsModalOpen(props.show);
  //   const modalRef = useRef(null);
  //   useEffect(() => {
  //     const closeModal = (e: any) => {
  //         if(e.path[0] !== 'MODAL')
  //         setIsModalOpen(false);
  //     }
  //     document.body.addEventListener('click', closeModal);
  //     return () => document.body.removeEventListener('click', closeModal);
  //   }, [isModalOpen])

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

    if (formIsValid) {
      //open some alert box to say Register is successful or not
      navigate("/");
    }
  }

  return (
    <React.Fragment>
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
            <h3>Register</h3>
            <Grid item xs={12} className={styles.textField}>
              <FormControl fullWidth>
                <TextField
                  id="email"
                  type="text"
                  variant="outlined"
                  placeholder="Email"
                  autoComplete="Email"
                  error={
                    emailInputHasError ||
                    invalidCredentials ||
                    passwordInputHasError
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
                    passwordInputHasError ||
                    invalidCredentials ||
                    emailInputHasError
                  }
                  helperText={
                    passwordInputHasError ||
                    invalidCredentials ||
                    emailInputHasError
                      ? "Invalid credentials"
                      : ""
                  }
                  onChange={passwordChangedHandler}
                  value={passwordValue}
                  inputProps={{ maxLength: 40 }}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={styles.loginBtn}
                type="submit"
                fullWidth
              >
                Sign Up
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </React.Fragment>
  );
}

export default Register;
