import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import React, { useState } from 'react';

import './NavbarTop.css'


function OffcanvasSiteOrder(){
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <Button variant="light" onClick={handleShow}>
                OffcanvasSiteOder
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>OffcanvasSiteOder</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Launch
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

function OffcanvasSiteLogin() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <Button variant="light" onClick={handleShow}>
                OffcanvasSitelogin
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>OffcanvasSitelogin</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Launch
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

function NavbarTop(){

    return(
        <>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    
                    <Navbar.Brand href="/" className = 'navbar-logo'>BKFood</Navbar.Brand>
                    
                    <OffcanvasSiteOrder/>

                    <OffcanvasSiteLogin/>

                </Container>
            </Navbar>
        </>
    )
}

export default NavbarTop;