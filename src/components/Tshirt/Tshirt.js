import React from 'react';
import { ToastContainer } from 'react-toastify';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddToCart}) => {
    const {name, picture, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <ToastContainer></ToastContainer>
            <button onClick={()=> handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default Tshirt;