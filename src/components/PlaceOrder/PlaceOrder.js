import React from 'react';
import img from '../../images/giphy.gif';
import './PlaceOrder.css';

const PlaceOrder = () => {
    return (
        <div>
            <h2>Order has Placed</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;