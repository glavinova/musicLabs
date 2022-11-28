import React from "react";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material/styles";
import ErrorBoundary from "./context/errorBoundary";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { AppContextProvider } from "./context/app-context";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./store/reducers/auth";

const theme = createTheme({
  palette: {
    primary: {
      light: "#DDDDDD",
      main: "#8E7F7F",
      dark: "#433D3C",
    },
    secondary: {
      light: "#EFB7B7",
      main: "#BD4B4B",
      dark: "#8F384D",
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container!);
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;
const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <StyledEngineProvider injectFirst>
            <Provider store={store}>
              <Router>
                <App />
              </Router>
            </Provider>
          </StyledEngineProvider>
        </ThemeProvider>
      </AppContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);