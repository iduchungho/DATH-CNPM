import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { BsPlusLg } from "react-icons/bs";

import './Style.css';
import { CartComponent } from './Cart';
import { NavbarBottom } from './Navbar';

export function BKLogoComponent() {
    return (
        <>
            <div className='bk-food-court-container'>
                <img
                    src='https://e-learning.hcmut.edu.vn/pluginfile.php/1/core_admin/logocompact/300x300/1665455903/logoBK.png'
                    alt='logo'
                    className='bk-food-court-icon'
                />
                <div className='bk-food-court-text'>
                    <div className='navbar-logo-BK'>
                        BK
                    </div>
                    <div className='navbar-logo-food'>
                        FoodCourt
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Home() {
    return (
        <>
            <div className='home-wallpaper'>
                {CarouselComponent()}
                <div className='content'>
                    <h3>Tất cả sản phẩm</h3>
                </div>
                <div className='food-container'>
                    <div className='left-container'>
                        <Card variant = 'light' style={{ width: '10rem' }}>
                            <Card.Body>
                                <div>Đồ ăn</div>
                                <div className='line'/>
                                <div>Đồ uống</div>
                                <div className='line'/>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='food-card-container'>
                        <Card variant='light' style={{ width: '45rem' }}>
                            <Card.Body>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                                <div className='line'/>
                                <h4>Đồ ăn</h4>
                                <div className='line' />
                                {/*food card area*/}
                                <div className='food-card-area'>
                                    <Card style={{ width: '10rem' }} className= 'food-card'>
                                        <Card.Img variant="top" src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/306685/1632888139-3.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bún bò</Card.Title>
                                            <Card.Text>
                                                Bla bla
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/306685/1632888139-3.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bún bò</Card.Title>
                                            <Card.Text>
                                                Bla bla
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/306685/1632888139-3.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bún bò</Card.Title>
                                            <Card.Text>
                                                Bla bla
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/306685/1632888139-3.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bún bò</Card.Title>
                                            <Card.Text>
                                                Bla bla
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/306685/1632888139-3.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bún bò</Card.Title>
                                            <Card.Text>
                                                Bla bla
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/306685/1632888139-3.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bún bò</Card.Title>
                                            <Card.Text>
                                                Bla bla
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/306685/1632888139-3.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bún bò</Card.Title>
                                            <Card.Text>
                                                Bla bla
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/306685/1632888139-3.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bún bò</Card.Title>
                                            <Card.Text>
                                                Bla bla
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/306685/1632888139-3.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bún bò</Card.Title>
                                            <Card.Text>
                                                Bla bla
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/306685/1632888139-3.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bún bò</Card.Title>
                                            <Card.Text>
                                                Bla bla
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/306685/1632888139-3.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bún bò</Card.Title>
                                            <Card.Text>
                                                Bla bla
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/306685/1632888139-3.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bún bò</Card.Title>
                                            <Card.Text>
                                                Bla bla
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg /></Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='right-container'>
                        <CartComponent/>
                    </div>
                </div>
                <NavbarBottom />
            </div>
        </>
    )
}

export function CarouselComponent() {
    return (
        <Carousel fade className='carousel-slide'>
            <Carousel.Item>
                <img
                    className="w-100"
                    src="https://susanhom.com/wp-content/uploads/2021/12/5-1-15.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src="https://amthuchathanh.com/wp-content/uploads/2011/06/Bun-Bo-Hue-1.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}