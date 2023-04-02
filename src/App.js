import "./App.less";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "@emotion/react";
import defaultTheme from "./themes/default";
import RootRoutes from "./routes/root.routes";

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
