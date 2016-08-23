import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Bootstrap from "./vendor/bootstrap.without.jquery.js";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import { Routing } from "./pages/Routing";
import Settings from "./pages/Settings";
import ToDo from "./pages/ToDo";

const app = document.getElementById('app');
ReactDOM.render(
    <Routing />,
    app
)