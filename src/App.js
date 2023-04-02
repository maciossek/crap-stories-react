import "./App.less";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "@emotion/react";
import defaultTheme from "./themes/default";
import RootRoutes from "./routes/root.routes";
import { Provider } from "react-redux";
import store from "./config/redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ApolloProvider } from "@apollo/client";
import apClient from "./config/apollo";

const persistor = persistStore(store);

export default function App() {
  return (
    <ApolloProvider client={apClient()}>
      <ThemeProvider theme={defaultTheme}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: defaultTheme.colors.primary500,
            },
          }}
        >
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <RootRoutes />
            </PersistGate>
          </Provider>
        </ConfigProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
