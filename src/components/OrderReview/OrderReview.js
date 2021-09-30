import React from 'react';
import useProducts from '../../hooks/useProducts';
import './OrderReview.css'

const OrderReview = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2>Order Review</h2>
            <h3>{products.length}</h3>
        </div>
    );
};

export default OrderReview;