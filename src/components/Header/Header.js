import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="ema-john logo" />

            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user.displayName && <span style={{ color: "white" }}>{user.displayName} </span>
                }
                {
                    user.displayName ?
                        <button onClick={logout}>Logout</button>
                        :
                        <NavLink to="/login">Log In</NavLink>
                }
                {/* <NavLink to="/register">Register</NavLink> */}
            </nav>
        </div>
    );
};

export default Header;