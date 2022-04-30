/* istanbul ignore file */
import { ThemeProvider } from "@emotion/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import defaultTheme from "./themes/default";
import { Provider } from "react-redux";
import store from "./config/redux";

export const AllProviders = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  </ThemeProvider>
);
