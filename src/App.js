import "./App.less";
import { ThemeProvider } from "@emotion/react";
import defaultTheme from "./themes/default";
import RootRoutes from "./routes/root.routes";
// import auth0 from "./config/auth0";

// auth0.checkSession({}, (err, authResult) => {
//   console.log(err, authResult);
// });

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RootRoutes />
    </ThemeProvider>
  );
}
