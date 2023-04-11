/* istanbul ignore file */
import { ThemeProvider } from "@emotion/react";
import { ConfigProvider } from "antd";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import defaultTheme from "./themes/default";

export const AllProviders = ({ children }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: defaultTheme.colors.primary500,
      },
    }}
  >
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  </ConfigProvider>
);
