import React from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../hooks/useCart';
// import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderReview.css'

const OrderReview = () => {
    // const [products] = useProducts();
    const [cart, setCart] = useCart();

    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    /* 
        const handlePlaceOrder = () => {
            setCart([]);
            clearTheCart();            
        }
    */
    const handleProcessShipment = () => {
        history.push("/shipping");
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    {/* <button onClick={handlePlaceOrder} className="regular-btn">Place Order</button> */}
                    <button onClick={handleProcessShipment} className="regular-btn">Process Shipment</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;