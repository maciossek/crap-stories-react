import "./App.less";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "@emotion/react";
import defaultTheme from "./themes/default";
import RootRoutes from "./routes/root.routes";
// import auth0 from "./config/auth0";

// auth0.checkSession({}, (err, authResult) => {
//   console.log(err, authResult);
// });

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: defaultTheme.colors.primary500,
        },
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <RootRoutes />
      </ThemeProvider>
    </ConfigProvider>
  );
}
