import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";

// if (process.env.NODE_ENV === "development") {
//   const { worker } = import("./mocks/browser");
//   worker.start();
// }

// if (import.meta.env.MODE === "development") {
//   const { worker } = import("./mocks/browser");
//   worker.start();
// }

if (process.env.NODE_ENV === "development") {
  import("./mocks/browser");
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
