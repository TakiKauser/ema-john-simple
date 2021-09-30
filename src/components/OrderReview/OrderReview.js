import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderReview.css'

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
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