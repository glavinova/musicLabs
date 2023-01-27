import React, { Component } from "react";
import SongDetails from "./components/SongDetails/SongDetails";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ValidationEmail from "./components/ForgotPassword/ValidationEmail";
import Header from "./navigation/Header";
import { Container } from "@mui/system";
import Footer from "./navigation/Footer";
import * as actions from "./store/actions/index";
import { connect } from "react-redux";
import withRouter from "./components/WithRouter";
import { Route, Routes } from "react-router-dom";
import PassengerBlog from "./components/PassengerBlog/PassengerBlog";
import RequestSheets from "./components/RequestSheets/RequestSheets";
import AboutUs from "./components/AboutUs/AboutUs";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() {
    let routes = (
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/details" element={<SongDetails />} />
        <Route path="/blog" element={<PassengerBlog />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/requestSheets" element={<RequestSheets />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/reset-password-email-sent"
          element={<ValidationEmail />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/details" element={<SongDetails />} />
          <Route path="/blog" element={<PassengerBlog />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/requestSheets" element={<RequestSheets />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password-email-sent"
            element={<ValidationEmail />}
          />
        </Routes>
      );
    }
    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <Header />
          {routes}
          <Footer />
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState()),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
