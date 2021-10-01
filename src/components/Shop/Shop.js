import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [requiredProducts, setRequiredProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(response => response.json())
            .then(jsonData => {
                setProducts(jsonData);
                setRequiredProducts(jsonData);
            })
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                // console.log(key, addedProduct);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct);
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);

    const handleAddToCart = (product) => {
        const exists = cart.find(prdct => prdct.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(prdct => prdct.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        // console.log(product);
        setCart(newCart);
        addToDb(product.key);
    }
    const handlesearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setRequiredProducts(matchedProducts);
        // console.log(matchedProducts);
    }
    return (
        <>
            <div className="search-container">
                <input type="text"
                    placeholder="Search Product"
                    onChange={handlesearch} />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    <h3>Products: {products.length}</h3>
                    {
                        requiredProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="regular-btn">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;