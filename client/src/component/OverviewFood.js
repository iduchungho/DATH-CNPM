import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
    BsXLg
}
    from 'react-icons/bs'
import './OverviewFood.css';

export default function OverviewFood(foodID) {
    const [showbtn, setShowbtn] = useState(false);
    const handleShow = () => setShowbtn(true);
    const handleClose = () => setShowbtn(false);
    return (
        <>
            <Button variant="light" onClick={handleShow}>
                Tổng quan
            </Button>
            <Offcanvas show={showbtn} onHide={handleClose} placement="end" backdrop={true}>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <BsXLg onClick={handleClose} />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="line" />
                    <div className="food-description-container">
                        <img
                            src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/306685/1632888139-3.jpg"
                            className="img-ovvfood"
                        />
                        <div className="food-description">
                            <h3>Bún bò huế</h3>
                            <div>Nước dùng ngọt thịt, <br/> ăn kèm với rau sống</div>
                        </div>
                        <h3 className="food-price">25.000đ</h3>
                    </div>
                    <div className="line" />
                    <Form className="input-box">
                        <Form.Group className="mb-3">
                            <Form.Label><h3>Ghi chú</h3></Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form>
                    <div className="line"/>
                    <div className="payment">
                        <div className="line" />
                        <Button>Thêm vào giỏ hàng</Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}