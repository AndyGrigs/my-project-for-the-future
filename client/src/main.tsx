import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.js";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider.js";
import "./app/styles/index.scss";
import { StoreProvider } from "./app/providers/StoreProvider/index.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>
);
