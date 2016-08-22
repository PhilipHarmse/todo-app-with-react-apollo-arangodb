import React from "react"
import { Link } from "react-router";
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class Layout extends React.Component {
    render() {
        return (
            <div>

                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Todo Application</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#toDo">To Do Items</NavItem>
                        <NavItem eventKey={1} href="#archives">Archives</NavItem>
                        <NavItem eventKey={1} href="#settings">Settings</NavItem>

                    </Nav>
                </Navbar>

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
