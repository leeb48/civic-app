import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./store/Store";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <CssBaseline>
        <App />
      </CssBaseline>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
