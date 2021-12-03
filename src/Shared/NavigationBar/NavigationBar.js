import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="overflow-hidden">
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Interview Task</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link activeStyle={{
                    fontWeight: "bold",
                     color: "black"
                     }} as={NavLink} to="/home">Home</Nav.Link>
                    <Nav.Link activeStyle={{
                    fontWeight: "bold",
                     color: "black"
                     }} as={NavLink} to="/details">User Details</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;