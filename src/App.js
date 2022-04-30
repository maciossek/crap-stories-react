import "./App.less";
import { ThemeProvider } from "@emotion/react";
import defaultTheme from "./themes/default";
import RootRoutes from "./routes/root.routes";
import { Provider } from "react-redux";
import store from "./config/redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootRoutes />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
