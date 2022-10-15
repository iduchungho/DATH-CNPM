import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container'
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';

import React, { useState } from 'react';
import axios from 'axios';
import {
    BsPerson
    //BsXLg
}
    from 'react-icons/bs'
import { serverURL } from '../config/config';


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
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const input = {
            email: email,
            password: password
        }
        // const {data} = await axios.post(`${serverURL}/api/users/login`,input, {withCredentials: true})
        // console.log(data);
        const currentUser = await axios.get(`${serverURL}/api/users/me`,{withCredentials: true})
        console.log(currentUser)
        // const {data : state} = await axios.get(`${serverURL}/api/users/logout`,{withCredentials: true})
        // console.log(state)
    }
    return(
        <div className='login-wallpaper'>
            <div className='login-container'>
                <Card variant='light' style={{ width: '18rem' }}>
                    {/* <Card.Header>Đăng nhập</Card.Header> */}
                    <Card.Body>
                        <Card.Title>
                            <div className="navbar-logo-text">
                                <div className='navbar-logo-BK'>
                                    BK
                                </div>
                                <div className='navbar-logo-food'>
                                    Food
                                </div>
                            </div>
                        </Card.Title>
                        <Card.Text className= 'card-body-container'>
                            <div className='form-container'>
                                <Form className='form-site' onSubmit= {handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" onChange = {(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" onChange = {(e) => setPassword(e.target.value)}/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Card.Text>
                    </Card.Body>    
                </Card>               
            </div>
        </div>
    );
}

export function RegisterPage(){
    // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    return (
        <div className='login-wallpaper'>
            <div className='login-container'>
                <Card variant='light' style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>
                            <div className="navbar-logo-text">
                                <div className='navbar-logo-BK'>
                                    BK
                                </div>
                                <div className='navbar-logo-food'>
                                    Food
                                </div>
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <Form >
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                    />
                                </Form.Group>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>    
            </div>            
        </div>
    );
}