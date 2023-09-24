import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-jss";

import App from "./App.jsx";
import { theme } from "./theme";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
