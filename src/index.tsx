import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Dashboard } from "./template/dashboard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="h-screen flex flex-col">
      <Dashboard>
        <App />
      </Dashboard>
    </div>
  </React.StrictMode>
);
