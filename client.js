import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";

import Bootstrap from "./vendor/bootstrap.without.jquery.js";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import ToDo from "./pages/ToDo";
import store from "./store"



const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={ToDo}/>
                <Route path ="archives" component={Archives}></Route>
                <Route path ="settings" component={Settings}></Route>
                <Route path ="toDo" component={ToDo}></Route>
            </Route>
        </Router>
        </Provider>
    ,
    app
)