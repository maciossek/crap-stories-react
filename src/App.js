import "./App.less";
import { ThemeProvider } from "@emotion/react";
import defaultTheme from "./themes/default";
import RootRoutes from "./routes/root.routes";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RootRoutes />
    </ThemeProvider>
  );
}
