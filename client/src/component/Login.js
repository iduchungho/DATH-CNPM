import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container'
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';

import React from 'react';
// import axios from 'axios';
import {
    BsPerson
    //BsXLg
}
    from 'react-icons/bs'
import { serverURL } from '../config/config';

import { BKLogoComponent } from './Home';



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

export function LoginPage() {
    // const { data } = await axios.get('https://damh-cnpm.herokuapp.com/api/uploadFoods');
    // console.log(data);
    return (
        <div className='login-wallpaper'>
            <div className='login-container'>
                <Card variant='light' style={{ width: '18rem' }}>
                    {/* <Card.Header>Đăng nhập</Card.Header> */}
                    <Card.Body>
                        <Card.Title className='card-form-title'>
                            <BKLogoComponent />
                        </Card.Title>
                        <Card.Text className='card-body-container'>Đăng nhập</Card.Text>
                        <Form className='form-site'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export function RegisterPage() {
    // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    return (
        <div className='login-wallpaper'>
            <div className='login-container'>
                <Card variant='light' style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title className='card-form-title'>
                            <BKLogoComponent />
                        </Card.Title>
                        <Form className='font-site'>
                            <Form.Label>User Name</Form.Label>
                            <InputGroup className='mb-3'>
                                <Form.Control
                                    placeholder='Enter username'
                                />
                                <InputGroup.Text id='basic-addon1'>@bkfood.com</InputGroup.Text>
                            </InputGroup>
                            <Form.Group controlId='formBasicPassword' className='mb-3'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='Password' placeholder='Enter Password' />
                            </Form.Group>
                            <Form.Group controlId='formBasicConfirmPassword' className='mb-3'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type='Password' placeholder='Confirm Password' />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}