import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

/**
 * * Render the application to the root element.
 */

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
