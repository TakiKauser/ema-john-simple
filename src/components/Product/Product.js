import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, img, price, stock, seller } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <p><small>by {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="regular-btn" onClick={() => props.handleAddToCart(props.product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;