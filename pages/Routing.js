import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";



import Archives from "./Archives";
import Featured from "./Featured";
import Layout from "./Layout";
import Settings from "./Settings";
import ToDo from "./ToDo";



export default class Routing extends React.Component {
    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    <Route path="/" component={Layout}>
                        <IndexRoute component={ToDo}/>
                        <Route path ="archives" component={Archives}></Route>
                        <Route path ="settings" component={Settings}></Route>
                        <Route path ="toDo" component={ToDo}></Route>
                    </Route>
                </Router>,
            </div>
        );
    }
}

