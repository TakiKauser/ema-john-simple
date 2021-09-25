import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const { name, img, price, stock, seller, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
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
                <p><Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color-silver"
                    fullSymbol="fas fa-star icon-color-gold"
                    readonly
                ></Rating></p>
                <button className="regular-btn" onClick={() => props.handleAddToCart(props.product)}>{cartIcon}Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;