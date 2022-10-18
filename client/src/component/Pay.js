import React from 'react';
import './Style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Pay.css'
export default function PayComponent() {
    return (
        // <div>
        //     <div className="box">

        //         <div className="box-1">
        //             <div className="box-1-1">
        //                 <Form>
        //                     <heading>Hình thức giao hàng</heading>
        //                     {['radio'].map((type) => (
        //                         <div key={`inline-${type}`} className="mb-3">
        //                             <Form.Check
        //                                 inline
        //                                 label="Giao hàng tận nơi"
        //                                 name="group1"
        //                                 type={type}
        //                                 id={`inline-${type}-1`}
        //                             />
        //                             <Form.Check
        //                                 inline
        //                                 label="Nhận tại cửa hàng"
        //                                 name="group1"
        //                                 type={type}
        //                                 id={`inline-${type}-2`}
        //                             />

        //                         </div>
        //                     ))}
        //                 </Form>
        //             </div>
        //             <div className="box-1-2">
        //                 <div className="Auth-form-container">
        //                     <form className="Auth-form">
        //                         <div className="Auth-form-content">
        //                             <heading className="Auth-form-title">Thông tin liên hệ</heading>
        //                             <div className="text">
        //                                 Bạn đã có tài khoản?{" "}
        //                                 <span className="link-primary" >
        //                                     Đăng nhập
        //                                 </span>
        //                             </div>
        //                             <div className="form-group mt-3">

        //                                 <input
        //                                     type="email"
        //                                     className="form-control mt-1"
        //                                     placeholder="Tên người nhận"
        //                                 />
        //                             </div>
        //                             <div className="form-group mt-3">

        //                                 <input
        //                                     type="password"
        //                                     className="form-control mt-1"
        //                                     placeholder="số điện thoại"
        //                                 />
        //                             </div>


        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //             <div className="box-1-3">
        //                 <heading className = "box-1-3-title">Phương thức thanh toán</heading>
        //                 <div class="form-check">
        //                     <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
        //                         <label class="form-check-label" for="exampleRadios1">
        //                             Tiền mặt
        //                         </label>
        //                 </div>


        //             </div>
        //         </div>


        //     </div>
        //     <Button variant="primary">Primary</Button>{' '}
        // </div>
        <div className="box-container">
            <div className="BOX1">
                <div className="box1">
                    <h3 className="box1__item1">Hình thức nhận hàng</h3>
                    <input className='box1__item2' type="radio" name="selection" id="item2" />
                    <label for="item1">Giao hàng tận nơi</label>
                    <input className='box1__item3' type="radio" name="selection" id="item3" />
                    <label for="item3">nhận tại cửa hàng</label>
                </div>
                {/* <div className="box2">
                    <h3 className='box2__item1'>Thông tin liên hệ</h3>
                    <div className="box2__item2">
                        <input type="text" placeholder="Tên Người Nhận" name="uname" />
                    </div>
                    <div className="box2__item3">
                        <input type="password" placeholder="Số Điện Thoại" name="psw" />
                    </div>
                </div> */}
                <Card variant='light' style={{ width: '50rem' }}>
                    <Card.Title>
                        Thông tin liên hệ
                    </Card.Title>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder = "Tên người nhận" ></Form.Control>
                            </Form.Group>
                        </Form>
                    </Card.Body>

                </Card>
                <div className="box3">
                    <heading className="box3__item1">Phương thức thanh toán</heading>
                    <div className="box3__item2">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label class="form-check-label" for="exampleRadios1">
                            Tiền mặt
                        </label>
                    </div>
                </div>
            </div>
            <div className="BOX2">
                <div className="head">
                    <div className="firstline">
                        <span className="firstline__item1">Tạm tính(1 món) </span>
                        <span className="firstline__item2"> ₫60,000 </span>
                    </div>
                    <div className="secondline">
                        <span className="secondline__item1"> Giảm giá </span>
                        <span className="secondline__item2"> ₫0 </span>
                    </div>
                    <div className="thirdline">
                        <span className="thirdline__item1">Tổng cộng</span>
                        <span className="thirdline__item2"> ₫60,000 </span>
                    </div>
                    <div className="fourthline">
                        <div className="fourthline__item1">
                            <h3>Ghi chú</h3>
                            <form>
                                <label>
                                    <input type="text" name="name" />
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className="fifthline">
                        <Button variant="primary" className="fifthline__item1">Xác Nhận</Button>
                    </div>


                </div>
            </div>
        </div>
    );
}