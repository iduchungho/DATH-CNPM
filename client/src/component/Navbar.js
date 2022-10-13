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

export default function NavbarTop() {

    return (
        <>
            <Navbar bg="light" expand={'md'} key='md'>
                <Container fluid>
                    <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm' />

                    <Navbar.Brand href="/" className='navbar-logo'>
                        <div className="navbar-logo-text">
                            <div className='navbar-logo-BK'>
                                BK
                            </div>
                            <div className='navbar-logo-food'>
                                Food
                            </div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand-sm'
                        aria-labelledby="offcanvasNavbarLabel-expand-sm"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                                Offcanvas
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
        <div>

        </div>
    );
}