import React, { useContext, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./RequestSheets.module.css";
import { Paper, Grid, TextField, Button, Alert, Snackbar } from "@mui/material";
import AppContext from "../../context/app-context";
import useValidation from "../../hooks/use-validation";
import validateEmail from "../../validators/validateEmail";
import validateName from "../../validators/validateName";
import validateMessage from "../../validators/validateMessage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "@mui/material/Link";

const RequestSheets = () => {
  const [openSuccess, setOpenSuccess] = useState(false);

  const appCtx = useContext(AppContext);
  useEffect(() => {
    appCtx.setCurrentUrl("/requestSheets");
  });

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
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    isEmpty: nameIsEmpty,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useValidation(validateName);

  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageInputHasError,
    isEmpty: messageIsEmpty,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: messageReset,
  } = useValidation(validateMessage);

  let formIsValid = false;
  emailIsValid && nameIsValid && messageIsValid && (formIsValid = true);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };

  const submitHandler = (event: any) => {
    nameBlurHandler();
    emailBlurHandler();
    messageBlurHandler();
    event.preventDefault();

    if (formIsValid) {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
      const userId = process.env.REACT_APP_EMAILJS_USER_ID!;
      const templateParams = {
        from_name: nameValue,
        reply_to: emailValue,
        message: messageValue,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response: any) => {
          if (response.status === 200) {
            nameReset();
            emailReset();
            messageReset();
            setOpenSuccess(true);
          }
        })
        .then((error: any) => {
          console.log(error);
        });
    }
  };
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Snackbar
          open={openSuccess}
          onClose={handleClose}
          autoHideDuration={6000}
          className={styles.snackbar}
        >
          <Alert onClose={handleClose} severity="success">
            Thank you for your message, we will be in touch in no time !
          </Alert>
        </Snackbar>
      </Grid>
      <Paper className={styles.paper}>
        <h3 id="header"> Request Sheets </h3>
        <form aria-label="form" id="form" onSubmit={submitHandler}>
          <Grid container spacing={2} item zeroMinWidth className={styles.form}>
            <Grid item xs={12}>
              <label htmlFor="name"> Full Name * </label>
              <TextField
                variant="outlined"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Ana Frank"
                error={nameInputHasError}
                helperText={
                  nameIsEmpty
                    ? "Name is required"
                    : nameInputHasError
                    ? "Invalid name input"
                    : ""
                }
                onChange={nameChangedHandler}
                onBlur={nameBlurHandler}
                value={nameValue}
                inputProps={{ maxLength: 50 }}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="email"> Email * </label>
              <TextField
                variant="outlined"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="ana_frank@hotmail.com"
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
              <label htmlFor="message"> Message * </label>
              <TextField
                variant="outlined"
                id="message"
                name="message"
                autoComplete="message"
                placeholder="Request a song sheets here..."
                error={messageInputHasError}
                helperText={messageIsEmpty ? "Message is required" : ""}
                onChange={messageChangedHandler}
                onBlur={messageBlurHandler}
                value={messageValue}
                inputProps={{ maxLength: 10000 }}
                multiline
                rows={4}
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
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Grid item xs={12} className={styles.marginBottom40}>
        <Button className={styles.floatRight}>
          <Link href="/" underline="none" color="primary">
            <ArrowBackIcon className={styles.fontSize15} />
            &nbsp;Back to home page
          </Link>
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default RequestSheets;
