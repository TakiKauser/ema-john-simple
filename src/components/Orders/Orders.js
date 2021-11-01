import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`,{
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                else if (response.status === 401) {
                    history.push('/login');
                }
            })
            .then(jsonData => {
                setOrders(jsonData);
            })
    }, []);
    return (
        <div>
            <h2>Orders</h2>
            <h4>You've placed {orders?.length}</h4>
            <ul>
                {orders?.map(order => <li
                    key={order?._id}
                >{order?.name} : {order?.email}</li>)}
            </ul>
        </div>
    );
};

export default Orders;