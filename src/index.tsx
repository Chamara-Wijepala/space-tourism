import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import GlobalStyle from "styles/global.styled";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle />
      <App />
    </HashRouter>
  </React.StrictMode>
);
