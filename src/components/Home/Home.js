import React, { useState } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData()
    // console.log(tshirts);

    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt =>{
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            // toast('This shirt is already added')
        }
        else{
            const newCart = [...cart, tshirt]
            setCart(newCart);
            // toast('Successfully added')
        }
    }

    const handleRemoveFromCart = tshirt =>{
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
        // toast('Successfully removed');

    }
    return (
            <div className="home-container">
                <div className="t-shirt-container">
                    {
                        tshirts.map(tshirt => <Tshirt
                            key={tshirt._id}
                            tshirt={tshirt}
                            handleAddToCart = {handleAddToCart}
                        ></Tshirt>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                    cart= {cart}
                    handleRemoveFromCart  = {handleRemoveFromCart }
                    ></Cart>
                </div>
            </div>
    );
};

export default Home;