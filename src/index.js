import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import App from "./components/App";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-react.css?v=1.2.0";

var hist = createBrowserHistory();

ReactDOM.render(<App />, document.getElementById("root"));
