import React from "react";
import { createRoot } from "react-dom/client";

import "./Asset/Css/index.css";
import App from "./Routing";
import { BrowserRouter as Router } from "react-router-dom";

import "./Translation/Translation";
const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);
