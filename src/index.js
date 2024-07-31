import React from "react";
import { createRoot } from "react-dom/client"; // Use createRoot instead of ReactDOM.render

import "./styles/globals.css";
import App from "./containers/App";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
