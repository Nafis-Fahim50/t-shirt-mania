import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Granpa';

const Sister = () => {
    const ring = useContext(RingContext);
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Sister</h2>
            <p>gift: {ring}</p>
            <p>Money: {money}</p>
            <button onClick={()=> setMoney(money+1000)}>Increase</button>
        </div>
    );
};

export default Sister;