import React from 'react';
import './Style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Pay.css'


export default function PayComponent() {
    return (
      
        <div className="box-container">
            <div className="BOX1">
          
                <div className="box1">
                    <Card variant='light' style={{ width: '50rem' }}>
                        <Card.Title >
                            Phương thức giao hàng
                        </Card.Title>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    {/* <Form.Check type="radio" label="Giao hàng trực tiếp" value="giaohangtructiep" /> */}
                                    <input name="gender" type="radio" value="Nam" />  Giao hàng trực tiếp
                                </Form.Group>
                            {/* </Form>
                            <Form> */}
                        
                                <Form.Group className="mb-3" controlId="formBasicCheckbox" value="nhantaicuahang">
                                    {/* <Form.Check type="radio" label="Nhận tại cửa hàng" /> */}
                                    <input name="gender" type="radio" value="Nữ" />  Nhận tại cửa hàng
                                </Form.Group>
                            </Form>
                            
                        </Card.Body>
                    </Card>
                </div>
                <div className="box2">
                    <Card variant='light' style={{ width: '50rem' }}>
                        <Card.Title >
                            Thông tin liên hệ
                        </Card.Title>
                        <Card.Body >
                            bạn đã có tài khoản? 
                            <a className="dangnhap" href ='/Login'>  đăng nhập</a>
                        </Card.Body>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control placeholder="Tên người nhận" ></Form.Control>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control placeholder="Số điện thoại" ></Form.Control>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
              
                <div className="box3">
                    <Card variant='light' style={{ width: '50rem' }}>
                        <Card.Title >
                            Phương Thức Thanh Toán
                        </Card.Title>
                        <Card.Body>
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label class="form-check-label" for="exampleRadios1">
                                Tiền mặt
                            </label>
                        </Card.Body>
                    </Card>
                </div>

            </div>
            <div className="BOX2">
             
                <Card variant='light' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Giỏ hàng</Card.Title>
                    </Card.Body>
                    <Card.Body className="dongdau">
                        <span className="Tamtinh"> Tạm tính (0 Món ) </span>
                        <span className="gia1"> ₫0 </span>
                    </Card.Body>
                    <Card.Body className="donghai">
                        <span className="giamgia"> Giảm giá </span>
                        <span className="gia2"> ₫0 </span>
                    </Card.Body>
                    <Card.Body className="dongba">
                        <span className="tongcong">Tổng cộng</span>
                        <span className="gia3"> ₫0 </span>
                    </Card.Body>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="ghichu">Ghi Chú</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                    <div className="dong4"><Card.Body ><Button className="dong 4" variant="primary">Thanh Toán</Button></Card.Body></div>
                </Card>
                
            </div>
        </div>
    );
}