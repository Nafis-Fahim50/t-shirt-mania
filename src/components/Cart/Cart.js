import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length === 0){
        message = <p>Please at least one items</p>
    }
   else if(cart.length === 1){
        message = <p>Buy more shirt for discount</p>
   } 
    else {
        message = <p>Thanks for shopping</p>
    }
    return (
        <div>
            <h2 className={cart.length===0? `red` : `blue`}>Order Summary</h2>
            <p className={`bold ${cart.length===2 ? `orange`: `green`}`}>Selected Items: {cart.length}</p>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                    >
                    {tshirt.name}
                    <button onClick={()=> handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length ===3 ? <p>Get 30% discount</p> : <p>Buy more to get more discount</p>
            }
            <h4>And Operator</h4>
            {
                cart.length===2 && <p>10% discount</p>
            }
            <h4>Or Operator</h4>
            {
                cart.length=== 4 || <p>bujina aita</p>
            }
        </div>
    );
};

export default Cart;