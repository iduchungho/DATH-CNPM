import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
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
// import { Link } from 'react-router-dom';

export default function OffcanvasCart() {
    const [showbtn, setShowbtn] = useState(false);
    const handleShow = () => setShowbtn(true);
    const handleClose = () => setShowbtn(false);

    return (
        <>
            <Button variant="light" onClick={handleShow} className='button'>
                <BsCart2 className='btn-icon' />
                <div className='btn-title'>
                Xem giỏ hàng
                </div>
            </Button>
            <Offcanvas show={showbtn} onHide={handleClose} placement="end" backdrop="static">
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <BsXLg onClick={handleClose} />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* <div className='offcanvas-body-container'>
                        <div className='offcanvas-body-title'>
                            <h3>Giỏ hàng</h3>
                        </div>
                        <div className='offcanvas-body-item-nothing'>
                            <GiCardboardBox className='box-nothing-icon' />
                            <div className='message'>
                                Giỏ hàng của bạn hiện đang trống
                            </div>
                        </div>
                        <div className='line' />
                        <div className='offcanvas-body-bills'>
                            Tổng hóa đơn
                        </div>
                        <div className='line'/>
                    </div>
                    <Button variant='primary' href='/pay'> Tiến hành đặt hàng</Button> */}
                    <CartComponent/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export function CartComponent() {
    return (
        <>
            <Card variant='light'>
                {/* style={{ width: '18rem' }} */}
                <Card.Body>
                    <Card.Title>Giỏ hàng</Card.Title>
                    <GiCardboardBox className='box-nothing-icon' />
                    <div className='message'>
                        Giỏ hàng của bạn hiện đang trống
                    </div>
                    <div className='line' />
                        Tổng Cộng
                    <div className='message'>
                        Đã bao gồm thuế nếu có
                    </div>
                    <div className='line'/>
                    <Button value='primary' href='/pay'>Thanh toán</Button>
                </Card.Body>
            </Card>
        </>
    );
}