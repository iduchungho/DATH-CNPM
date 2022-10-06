import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Dropdown from 'react-bootstrap/Dropdown';

import React, { useState } from 'react';
import {
    BsCart2,
    BsXLg
}
    from 'react-icons/bs'
import { GiCardboardBox } from "react-icons/gi";

export default function OffcanvasCart() {
    const [showbtn, setShowbtn] = useState(false);
    const handleShow = () => setShowbtn(true);
    const handleClose = () => setShowbtn(false);
    return (
        <>
            <Button variant="light" onClick={handleShow} className='button'>
                <BsCart2 className='btn-icon' />
                <div className='btn-title'>
                    Giỏ hàng
                </div>
            </Button>
            <Offcanvas show={showbtn} onHide={handleClose} placement="end" backdrop={false}>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <BsXLg onClick={handleClose} />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='offcanvas-body-container'>
                        <div className='offcanvas-body-title'>
                            <h3>Giỏ hàng</h3>
                        </div>
                        <div className='offcanvas-body-item-nothing'>
                            <GiCardboardBox className='box-nothing-icon' />
                            <div className='message'>
                                Giỏ hàng của bạn hiện đang trống
                            </div>
                        </div>
                        <div className='line'/>
                        <div className='offcanvas-body-bills'>
                            bills here
                        </div>
                        <Button variant='primary'> Tiến hành đặt hàng</Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}