import Carousel from 'react-bootstrap/Carousel';

import './Style.css';

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
                <div className='carousel-container'>
                    carousel-item
                </div>
                <div className='food-container'>
                    <div className='left-container'>
                        cart-item
                    </div>
                    <div className='food-card-container'>
                        food
                    </div>
                    <div className='right-container'>
                        dashboard-item
                    </div>
                </div>
            </div>
        </>
    )
}

export function CarouselComponent() {
    return (
        <div>
            <Carousel>

            </Carousel>
        </div>
    );
}