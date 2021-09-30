import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { handleRemove } = props;
    const { key, name, price, quantity } = props.product;
    return (
        <div className="product">
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <h3>Price: {price}</h3>
                <h4>Quantity: {quantity}</h4>
                <button onClick={() => handleRemove(key)} className="regular-btn">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;