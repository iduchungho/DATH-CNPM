import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import { BsPlusLg } from "react-icons/bs";

import './style/Menu.css';
import { serverURL } from '../config/config';
import OverviewFood from "./OverviewFood";

export default function Menu() {
    const [foods, setFoods] = useState([]);
    const [showInfor, setShowInfor] = useState(false);
    const getFoods = async () => {
        const { data } = await axios.get(`${serverURL}/api/uploadFoods`);
        return data;
    }
    useEffect(() => {
        getFoods()
            .then(data => setFoods(data), err => console.error(err));
    }, [])
    console.log(foods);

    const items = foods[0];
    console.log(items);

    const handleClose = () => setShowInfor(false);

    return (
        <div className="menu-wallpaper">
            <div className="menu-title"></div>
            <div className="menu-container">
                {foods.map(food => (
                    <div className="food-group">
                        <img
                            src={food?.foodImage?.url}
                            alt={food?.id}
                            className="food-img"
                        />
                        <div className="about-food-menu">
                            <h3 className="menu-food-name">{food?.title}</h3>
                            <h4 className="menu-food-price">{food?.price}đ</h4>
                            <div className="menu-food-block-flex">
                                <OverviewFood food={food} />
                                <Button className="add-button"><BsPlusLg /></Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}