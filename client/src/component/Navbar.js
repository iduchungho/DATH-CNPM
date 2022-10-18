import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Dropdown from 'react-bootstrap/Dropdown';

import React from 'react';

import './Style.css'
import OffcanvasCart from './Cart';
import OffcanvasLogin from './Login';
import { BKLogoComponent } from './Home';

export default function NavbarTop() {

    return (
        <>
            <Navbar fixed='top' bg="light" expand={'md'} key='md'>
                <Container fluid>
                    <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm' />

                    <Navbar.Brand href="/" className='navbar-logo'>
                        {/* <div className="navbar-logo-text">
                            <BKLogoComponent/>
                        </div> */}
                        <BKLogoComponent />
                    </Navbar.Brand>
                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand-sm'
                        aria-labelledby="offcanvasNavbarLabel-expand-sm"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                                <BKLogoComponent />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Trang chủ</Nav.Link>
                                <Nav.Link href="/tutorial">Giới thiệu</Nav.Link>
                                <Nav.Link href="/register">Đăng kí</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    <OffcanvasCart/>
                    <OffcanvasLogin />

                </Container>
            </Navbar>
        </>
    )
}

export function NavbarBottom() {
    return(
        <Navbar bg='light'>
            <Container fluid>
                <Navbar.Brand>SE 2022 Project</Navbar.Brand>
            </Container>
        </Navbar>
    );
}