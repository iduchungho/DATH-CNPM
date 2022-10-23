import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {BsXLg} from 'react-icons/bs'
import './OverviewFood.css';

export default function OverviewFood(foodID) {
    
    const [showbtn, setShowbtn] = useState(false);
    const handleShow = () => setShowbtn(true);
    const handleClose = () => setShowbtn(false);
    return (
        <>
            <Button variant="light" onClick={handleShow}>
                Chi tiết
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
                            src={foodID.src}
                            className="img-ovvfood"
                        />
                        <div className="food-description">
                            <h3>{foodID.foodName}</h3>
                            <p>{foodID.descrip}</p>
                        </div>
                        <h4 className="food-price">{foodID.price}</h4>
                    </div>
                    <div className="line" />
                    <Form className="input-box">
                        <Form.Group className="mb-3">
                            <Form.Label><h4>Ghi chú</h4></Form.Label>
                            <Form.Control
                                placeholder="Thêm yêu cầu về món ăn (nếu có)"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
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