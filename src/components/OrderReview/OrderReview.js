import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import './OrderReview.css'

const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div className="shop-container">
            <div className="product-container">

            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
            {/* <h2>Order Review</h2>
            <h3>{products.length}</h3>
            <h3>{cart.length}</h3>
            <Cart cart={cart}/> */}
        </div>
    );
};

export default OrderReview;