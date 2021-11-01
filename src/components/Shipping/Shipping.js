import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(jsonData => {
                if(jsonData.insertedId){
                    alert("We have received your order.");
                    clearTheCart();
                    reset();
                }
            })
    }
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input placeholder="Email" {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="Phone Number" defaultValue="" {...register("phone")} />
                {errors.phone && <span className="error">This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;