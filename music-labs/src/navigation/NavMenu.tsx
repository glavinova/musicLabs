import React, { useContext, useEffect, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Button, Link, Typography } from "@mui/material";
import appConstants from "../constants/app-constants";
import styles from "./NavigationStyles.module.css";
import Login from "../components/Login/Login";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/app-context";

function NavMenu(props: any) {
  const appCtx = useContext(AppContext);
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = (e: any) => {
    e.preventDefault();
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };

  const logoutHandler = (event: any) => {
    event.preventDefault();
    props.onLogout();
    setShowModal(false);
    navigate("/");
  };

  useEffect(() => {
    appCtx.setCurrentUrl("/");
  }, [logoutHandler]);

  let userData = JSON.parse(localStorage.getItem("userData")!);

  return (
    <React.Fragment>
      <Toolbar
        component="nav"
        variant="dense"
        className={styles.overflowXauto}
        sx={{
          display: "inline-block",
          marginTop: "15px",
          marginBottom: props.isAuthenticated ? "25px" : "",
        }}
      >
        {appConstants.sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={styles.linkCustomStyle}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ display: "inline-block", float: "right", marginTop: "10px" }}
      >
        {!props.isAuthenticated ? (
          <>
            <Button
              color="secondary"
              variant="contained"
              size="small"
              sx={{ marginRight: "10px" }}
              onClick={showModalHandler}
              data-testid="loginBtn"
            >
              Login
            </Button>
            <Login showModal={showModal} onClose={closeModalHandler} />
            <Link href="/register">
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                data-testid="signUpBtn"
              >
                Sign up
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Toolbar
              component="nav"
              variant="dense"
              className={styles.overflowXauto}
              sx={{
                display: "inline-block",
                marginTop: "5px",
                paddingTop: "10px",
              }}
            >
              <Typography className={styles.userName}>Eve Holt</Typography>
            </Toolbar>

            <Avatar
              alt={userData.first_name + " " + userData.last_name}
              src={userData.avatar}
              sx={{ width: 56, height: 56, display: "inline-block" }}
            />
            <br />
            <Button
              onClick={logoutHandler}
              className={styles.logoutBtn}
              data-testid="logoutBtn"
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
