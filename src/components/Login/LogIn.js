import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";
    // console.log(location?.state?.from);

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <h3>Log In</h3>
            <form>
                <input type="email" name="email" id="email" placeholder="Email" /> <br /> <br />
                <input type="password" name="password" id="password" placeholder="Password" /> <br /> <br />
                <input type="submit" value="Log In" />
            </form>
            <p>New to ema-john? <Link to="/register">Create Account</Link></p>
            <div>-----------or----------</div>
            <button
                className="regular-btn"
                onClick={handleGoogleLogIn}
            >Google Sign In</button>
        </div>
    );
};

export default LogIn;