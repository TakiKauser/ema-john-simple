import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h3>Create Account</h3>
                <form onSubmit="">
                    <input type="email" name="email" id="email" placeholder="Email" /> <br /> <br />
                    <input type="password" name="password" id="password" placeholder="Password" /> <br /> <br />
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="Re-Enter Password" /> <br /> <br />
                    <input type="submit" value="Log In" />
                </form>
                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </div>
        </div>
    );
};

export default Register;