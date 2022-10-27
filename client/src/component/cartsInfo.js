import React from "react";
import './style/Style.css';
import Table from 'react-bootstrap/Table';

export default function CartsInfo() {
    return (
        <>
            <div>
                <div className="table-caption">
                    <span>Khách hàng: Gia Phong - 0798784338</span>
                </div>
                <Table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Food Title</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Kem cực lạnh</td>
                            <td>1</td>
                            <td>12.000đ</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Chuối bơ</td>
                            <td>2</td>
                            <td>3.000đ</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Bún bò Huế</td>
                            <td>1</td>
                            <td>30.000đ</td>
                        </tr>
                    </tbody>
                </Table>
                <div>
                    <span>Tổng tiền: 48.000đ</span>
                </div>
            </div>
            <hr/>
            <div>
                <div className="table-caption">
                    <span>Khách hàng: Đức Hưng - 098855533</span>
                </div>
                <Table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Food Title</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Kem cực lạnh</td>
                            <td>1</td>
                            <td>12.000đ</td>
                        </tr>
                    </tbody>
                </Table>
                <div>
                    <span>Tổng tiền: 12.000đ</span>
                </div>
            </div>
        </>
    );
}