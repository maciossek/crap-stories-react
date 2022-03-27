import "./App.css";
import { ThemeProvider } from "@emotion/react";
import defaultTheme from "./layouts/themes/default";
import HomeView from "./views/home/HomeView";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HomeView />
    </ThemeProvider>
  );
}
