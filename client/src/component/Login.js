import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container'
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';

import React from 'react';
import {
    BsPerson
    //BsXLg
}
    from 'react-icons/bs'


export default function OffcanvasLogin() {
    // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    return (
        <>
            <Button variant="primary" href='/login' className='button'>
                <BsPerson className='btn-icon' />
                <div className='btn-title'>
                    Đăng nhập
                </div>
            </Button>
        </>
    )
}

export function LoginPage(){
    return(
        <div className='login-wallpaper'>
            <div className='login-container'>
                <Card variant='light' style={{ width: '18rem' }}>
                    {/* <Card.Header>Đăng nhập</Card.Header> */}
                    <Card.Body>
                        <Card.Title>Đăng nhập</Card.Title>
                        <Card.Text>Phần của phong</Card.Text>
                    </Card.Body>    
                </Card>               
            </div>
        </div>
    );
}