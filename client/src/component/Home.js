import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { BsPlusLg } from "react-icons/bs";

import './Style.css';
import { CartComponent } from './Cart';
import OverviewFood from './OverviewFood';

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
            <CarouselComponent className = 'carousel-component'/>
            <div className='home-wallpaper'>
                <div className='content'>
                    <h3>Tất cả sản phẩm</h3>
                </div>
                <div className='food-container'>
                    <div className='left-container'>
                        <Card variant = 'light'>
                            {/* style={{ width: '10rem' }} */}
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
                                        placeholder="Tìm kiếm món ăn"
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
                                    <Card style={{ width: '10rem'}} className= 'food-card'>
                                        <Card.Img variant="top" src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/306685/1632888139-3.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bún bò</Card.Title>
                                            <Card.Text>
                                                25.000đ
                                            </Card.Text>
                                            {/* <Button variant="primary"><BsPlusLg/></Button> */}
                                            <OverviewFood foodID='1' foodName="Bun bo" price="25.000 đồng"/>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{width:'10rem'}} className='food-card'>
                                        <Card.Img variant="top" style={{height: '9.4rem'}} src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/307416/1632889913-Bo-vin-nh.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bò viên to</Card.Title>
                                            <Card.Text>
                                                20.000đ
                                            </Card.Text>
                                            {/*<Button variant="primary"><BsPlusLg/></Button> */}
                                            <OverviewFood foodID='2' foodName ="Bò viên to" price="20.000 đồng"/>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" style={{ height: '9.8rem'}} src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/307498/1632891187-quay-to.jpg" />
                                        <Card.Body>
                                            <Card.Title>Quẩy to</Card.Title>
                                            <Card.Text>
                                                10.000đ
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem'}} className='food-card'>
                                        <Card.Img variant="top" style={{height: '9.6rem'}} src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/307663/1632892166-gio-tai-to.jpg" />
                                        <Card.Body>
                                            <Card.Title>Giò tai to</Card.Title>
                                            <Card.Text>
                                                20.000đ
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/338641/1633852908-nhau-to.jpg" />
                                        <Card.Body>
                                            <Card.Title>Nhậu to</Card.Title>
                                            <Card.Text>
                                                150.000đ
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" style={{ height: '100rem'}} src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/338643/1633853304-bun.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bún thêm</Card.Title>
                                            <Card.Text>
                                                5000đ
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" style={{  height: '9.5rem'}} src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/338644/1633853881-b-thm.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bò thêm</Card.Title>
                                            <Card.Text>
                                                30.000đ
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" style={{  height: '9.5rem'}} src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/338645/1633854000-nhau-nho-1.jpg" />
                                        <Card.Body>
                                            <Card.Title>Móng thêm</Card.Title>
                                            <Card.Text>
                                                15.000đ
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" style={{  height: '8.5rem'}} src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/338646/1633854070-do-3.jpg" />
                                        <Card.Body>
                                            <Card.Title>Chả cua</Card.Title>
                                            <Card.Text>
                                                10.000đ
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" style={{  height: '8.5rem'}} src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/338718/1633855141-bohuc.jpg" />
                                        <Card.Body>
                                            <Card.Title>Bò húc</Card.Title>
                                            <Card.Text>
                                               20.000đ
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" style={{  height: '8.5rem'}} src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/338714/1633854521-coca-2.jpg" />
                                        <Card.Body>
                                            <Card.Title>Coca Cola</Card.Title>
                                            <Card.Text>
                                                15.000đ
                                            </Card.Text>
                                            <Button variant="primary"><BsPlusLg/></Button>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '10rem' }} className='food-card'>
                                        <Card.Img variant="top" style={{  height: '8.5rem'}} src="https://s3-bucket.s3.cloud.cmctelecom.vn/34778520/products/338715/1633854728-sting-1.jpg" />
                                        <Card.Body>
                                            <Card.Title>Sting</Card.Title>
                                            <Card.Text>
                                                15.000đ
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