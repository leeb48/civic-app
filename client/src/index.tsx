import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Material UI Imports
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./config/theme.config";

// State Management Imports
import { StoreProvider } from "./store/Store";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
