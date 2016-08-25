import ApolloClient, { createNetworkInterface } from 'apollo-client';
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { ApolloProvider } from "react-apollo";

import Bootstrap from "./vendor/bootstrap.without.jquery.js";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import { Routing } from "./pages/Routing";
import Settings from "./pages/Settings";
import ToDo from "./pages/ToDo";


const networkInterface =  createNetworkInterface('http://localhost:9500/graphql');

const client = new ApolloClient({networkInterface});

const app = document.getElementById('app');
ReactDOM.render(
    <ApolloProvider client={client}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={ToDo}/>
                <Route path ="archives" component={Archives}></Route>
                <Route path ="settings" component={Settings}></Route>
                <Route path ="toDo" component={ToDo}></Route>
            </Route>
        </Router>
    </ApolloProvider>,
    app
)