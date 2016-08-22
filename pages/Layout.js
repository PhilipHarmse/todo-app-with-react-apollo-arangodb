import React from "react"
import { Link } from "react-router";

export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>KillerNews.ne</h1>                
                            <Link to="archives">archives</Link>
                            <Link to="settings">settings</Link>
                            <Link to="toDo">To Do</Link>
                            {this.props.children}
                        </div>
                    </div>
                </div>               
            </div>
        )
    }
}
